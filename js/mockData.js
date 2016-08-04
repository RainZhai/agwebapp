Mock.mock('http://g.cn', {
    'name': '@name()',
    'age|1-100': 100,
    'color': '@color'
});
Mock.mock('/angular/home/getTrend.htm', {
    errCode: '0',
    errMsg: '',
    data: {
     totalLine: [120000, 150000, 170000, 21000, 160000, 221000, 270000],
     repeatedLine: [10000, 13000, 21000, 23000, 17000, 25000, 28000],
     tbdLine: [8300, 9800, 7000, 9200, 8000, 7800, 10000]
    }
});