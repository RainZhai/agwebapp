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
            author: 'suning001',
            project: 'SNCD',
            task: '修复缺陷分支',
            time: 1440056486854
        },
        {
            author: 'suning002',
            project: 'SNCD',
            task: '修复缺陷分支',
            time: 1442592000000
        },
        {
            author: 'suning003',
            project: 'SNCD',
            task: '修复缺陷分支',
            time: 1442692000000
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
    data: [
        { value: 335, name: '阻塞原因1' },
        { value: 310, name: '阻塞原因2' },
        { value: 234, name: '阻塞原因3' },
        { value: 135, name: '阻塞原因4' },
        { value: 1548, name: '阻塞原因5' },
        { value: 345, name: '阻塞原因6' }
    ]
});