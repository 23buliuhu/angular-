'use strict';
angular.module('app').controller('mainCtrl',['$scope',function ($scope) {
    $scope.list1=[{
        id:'1232',
        name:'销售',
        imgSrc:'image/company-1.png',
        companyName:'千度',
        city:'上海',
        industry:'互联网',
        time:'2017-01-23 12:33'
    },{
        id:'1234',
        name:'PHP',
        imgSrc:'image/company-2.png',
        companyName:'阿里巴巴',
        city:'深圳',
        industry:'互联网',
        time:'2017-03-23 12:44'
    },{
        id:'1235',
        name:'Java',
        imgSrc:'image/company-3.png',
        companyName:'百度',
        city:'深圳',
        industry:'互联网',
        time:'2017-05-23 10:42'
    }]
    $scope.list2=[{
        id:'1232',
        name:'销售',
        imgSrc:'image/company-1.png',
        companyName:'千度',
        city:'上海',
        industry:'互联网',
        time:'2017-01-23 12:33'
    },{
        id:'1234',
        name:'PHP',
        imgSrc:'image/company-2.png',
        companyName:'阿里巴巴',
        city:'深圳',
        industry:'互联网',
        time:'2017-03-23 12:44'
    },{
        id:'1235',
        name:'Java',
        imgSrc:'image/company-3.png',
        companyName:'百度',
        city:'深圳',
        industry:'互联网',
        time:'2017-05-23 10:42'
    }]
}]);