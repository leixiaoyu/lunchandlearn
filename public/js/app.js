var app = angular.module('LunchAndLearnApp', [
  'ngRoute',
  'ui.router',
  'AppController',
  'ModelFactory']);

var underscore = angular.module('underscore', []);
underscore.factory('_', function(){
  return window._;
});

app.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    // for any unmatched url, redirect to state "/"
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: '/views/home.html',
        controller: 'MainController'
      })
      .state('proposed', {
        url: '/proposed',
        templateUrl: '/views/proposed.html',
        controller: 'ProposedController'
      });
  }
]);
