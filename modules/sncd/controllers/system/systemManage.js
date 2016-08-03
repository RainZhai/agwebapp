angular.module('sncd').controller('SystemManageCtrl', ['$scope', 'SystemService', '$state',
    function ($scope, SystemService, $state) {

        'use strict';

        var vm = $scope,
            formData = vm.formData = {},
            sysMap = {},
            pager = vm.pager = {
                pageNumber: 1,
                totalCount: 0, //总条数
                pageSize: 10
            };

        //$scope.currWorkNo = $rootScope.currUser && $rootScope.currUser.workNo;

        ////////////////functions/////////////////
        function init() {

            getMySystemList();

        }

        // 查询系统列表
        function getMySystemList() {

            var params = {
                pageNum: $scope.pager.pageNumber,
                keyword: $scope.keyword
            };

            SystemService.getMySystem(params).then(function (result) {
                $scope.pager.totalCount = result.totalDataCount;
                $scope.pager.pageNumber = result.pageNumber;
                $scope.$broadcast('sn.controls.pager:toPage', $scope.pager.pageNumber);
                $scope.sysList = result.datas;

//        for(var i = 0; i < $scope.sysList.length; i++){
//            sysMap[$scope.sysList[i].id] = $scope.sysList[i];
//        }
//
//        SystemService.getVersionNum().then(function(result){
//            $scope.sysPart = result.datas;
//            for(var j = 0; j < $scope.sysPart.length; j++){
//              sysMap[$scope.sysPart[j].id].trend = $scope.sysPart[j].trend;
//            }
//          })
            });
        }

        /////////////////$scope functions/////////////////

        $scope.getSystemVersions = function (sys, type) {
            $state.go("VersionManage", {
                sysId: sys.sysId,
                type: type
            });
        };

        //搜索
        $scope.search = function () {
            $scope.pager.pageNumber = 1;
            getMySystemList();
        }


        $scope.createVersion = function (sys) {
            $state.go("CreateVersion", {
                id: sys.sysId
            });
        };

        //跳转打包配置
        $scope.goPackageConfig = function (system) {
            SystemService.createOrDetail({"sysId": system.sysId}).then(function (result) {
                if (result.showType == "1") {//进入详情
                    $state.go("PackageConfig", {
                        sysId: system.sysId
                    });
                } else {//进入新建
                    $state.go("AddPackageConfig", {
                        sysId: system.sysId
                    });
                }
            });
        }

        ///////////////////Events//////////////////
        //分页
        vm.$on('sn.controls.pager:pageIndexChanged', function (evt, page) { // 分页操作
            evt.stopPropagation();
            getMySystemList(page.pageIndex + 1);
        });

        init();
        return vm;


    }]);