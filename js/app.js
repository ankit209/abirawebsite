'use strict';
(function () {
   var app = angular.module('AbiraCreations', ['ngRoute', 'ngCookies',])
        .config(config)

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        // if u want to remove the # from Link Just uncomment the line below
        // $locationProvider.html5Mode(true);
        $routeProvider
            .when('/home', {
                templateUrl: 'templates/Home.html',
                controller: 'HomeController'
               
            })
            .when('/blog', {
                templateUrl: 'templates/blog.html',
                controller: 'HomeController'
               
            })
           
         
        .otherwise({ redirectTo: '/home' });
    }
 
 
})();