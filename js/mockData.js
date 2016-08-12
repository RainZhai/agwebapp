Mock.mock('http://g.cn', {
    'name': '@name()',
    'age|1-100': 100,
    'color': '@color'
});
Mock.mock('/angular/home/getTrend.htm', {
    errCode: '0',
    errMsg: '',
    data: {
        permillageBugRates: "11123",
        technicalDebtRate: "123",
        commentRate: "235"
        //totalLine: [120000, 150000, 170000, 21000, 160000, 221000, 270000],
        //repeatedLine: [10000, 13000, 21000, 23000, 17000, 25000, 28000],
        //tbdLine: [8300, 9800, 7000, 9200, 8000, 7800, 10000]
    }
});

Mock.mock("/angular/home/getMyDynamicState.htm", {
    errCode: '0',
    errMsg: '',
     data: {
    datas: [
        {
            operator: 'suning001',
            project: 'AAA',
            task: '修复缺陷分支',
            updateTime: 1440056486854
        },
        {
            operator: 'suning002',
            project: 'CCC',
            task: '修复缺陷分支',
            updateTime: 1442592000000
        }
    ]
     }
});
Mock.mock("/angular/home/getSysBranchInfo.htm", {
    errCode: '0',
    errMsg: '',
    data: {
        totalDataCount: 13,
        pageNumber: 0,
        datas: [
            {
                sysName: 's001',
                branchName: 'test',
                techManager: '修复缺4陷分支'
            }, {
                sysName: 's002',
                branchName: 'test2',
                techManager: '修复缺4陷分支'
            }
        ]
    }
});
Mock.mock("/angular/home/getCustomerInfo.htm", {
    errCode: '0',
    errMsg: '',
    data: {
        userName: "kakaka",
        role: 0
    }
});
Mock.mock("/angular/home/getQualityAnalysis.htm", {
    errCode: '0',
    errMsg: '',
    data: {
        analysis: [
            { value: 335, name: '项目1' },
            { value: 310, name: '项目2' },
            { value: 234, name: '项目3' },
            { value: 135, name: '项目4' },
            { value: 1548, name: '项目5' },
            { value: 345, name: '项目6' }
        ]
    }
});
Mock.mock("/angular/home/getQualityAnalysis2.htm", {
    errCode: '0',
    errMsg: '',
    data: {analysis: [
            { value: 335, name: '项目1' },
            { value: 310, name: '项目2' },
            { value: 234, name: '项目3' },
            { value: 135, name: '项目4' },
            { value: 1548, name: '项目5' },
            { value: 345, name: '项目6' }
        ]}
});