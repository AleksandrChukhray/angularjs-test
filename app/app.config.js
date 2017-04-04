'use strict';

var app = angular.module('myapp');

  app.config(['$locationProvider' ,'$routeProvider',
  function config($locationProvider, $routeProvider) {

    $locationProvider.hashPrefix('!');
      $routeProvider.
        when('/', {
          templateUrl: 'views/home.html',
          controller: 'MainCtrl'
        }).
        when('/map', {
          templateUrl: 'views/map.html',
          controller: 'MapCtrl'
        }).
        when('/contacts', {
          templateUrl: 'views/contacts.html',
          controller: 'ContactsCtrl'
        }).
        otherwise({
          templateUrl: 'views/404.html',
          controller: 'NotFoundCtrl'
        });
    }]);
