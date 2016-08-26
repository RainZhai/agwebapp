angular.module('sncd').controller('EndedVersionCtrl', ['$scope', 'VersionManageService', '$state', '$stateParams',
    function ($scope, VersionManageService, $state, $stateParams) {

        var vm = $scope.vm = {};
        pager = vm.pager = {
            currentPage: 1,
            itemsPerPage: 5,
            listSize: 5,
            totalItems: 0
        };
        vm.sort = {
            column: 'id',
            direction: -1,
            toggle: function (column) {
                if (column.sortable === false)
                    return;

                if (this.column === column.name) {
                    this.direction = -this.direction || -1;
                } else {
                    this.column = column.name;
                    this.direction = -1;
                }
            }
        };
        //栏目名称
        vm.columns = [
            {
                label: 'ID',
                name: 'id',
                type: 'string'
            },
            {
                label: '姓名',
                name: 'name',
                type: 'string'
            },
            {
                label: '粉丝数',
                name: 'followers',
                type: 'number'
            },
            {
                label: '年龄',
                name: 'birthday',
                type: 'number'
            },
            {
                label: '收入',
                name: 'income',
                type: 'currency'
            }
            // ,{
            //     label: '',
            //     name: 'actions',
            //     sortable: false
            // }
        ];
        vm.items = [];
        vm.checkAll = function (checked) {
            angular.forEach(vm.items, function (item) {
                item.$checked = checked;
            });
        };
        vm.selection = function () {
            return _.where(vm.items, { $checked: true });
        };
        // 供页面中使用的函数
        vm.age = function (birthday) {
            return moment().diff(birthday, 'years');
        };
        // 生成演示数据
        var MAX_NUM = 10;
        function rand(min, max) {
            return min + Math.round(Math.random() * (max - min));
        }
        for (var i = 0; i < MAX_NUM; ++i) {
            var id = rand(0, MAX_NUM);
            vm.items.push({
                id: i + 1,
                name: 'Name' + id, // 字符串类型
                followers: rand(0, 100 * 1000 * 1000), // 数字类型
                birthday: moment().subtract('day', rand(365, 365 * 50)).toDate(), // 日期类型
                income: rand(1000, 100000) // 金额类型
            });
        }
    }]);
