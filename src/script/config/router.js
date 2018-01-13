'use strict';
angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('main', {
        url: '/main',
        templateUrl: 'view/main.html',
        controller: 'mainCtrl'
    }).state('company',{
        url:"/company/:id",
        templateUrl:"view/template/company.html",
        controller:"companyCtrl"
    });
    $urlRouterProvider.otherwise('main');
}]);
