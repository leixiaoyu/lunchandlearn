var app = angular.module('LunchAndLearnApp', [
  'auth0',
  'angular-storage',
  'angular-jwt',
  'ngRoute',
  'ngSanitize',
  'ui.router',
  'btford.markdown',
  'AppController',
  'ModelFactory']);

// Set up underscore
var underscore = angular.module('underscore', []);
underscore.factory('_', function(){
  return window._;
});

// Set up Auth0
app.config(function(authProvider, $routeProvider, $httpProvider, jwtInterceptorProvider) {
  authProvider.init({
    domain: 'leixiaoyu.auth0.com',
    clientID: 'qaLoC51ur9I2BVue76rwEWH1wDZuCw3F',
    loginState: 'login'
  });

  jwtInterceptorProvider.tokenGetter = ['store', function(store) {
    return store.get('token');
  }];

  $httpProvider.interceptors.push('jwtInterceptor');
})
.run(function($rootScope, auth, store, jwtHelper, $state) {
  // This hooks al auth events to check everything as soon as the app starts
  auth.hookEvents();

  // Keep user session even when user refresh page
  $rootScope.$on('$locationChangeStart', function() {
    var token = store.get('token');
    if (token) {
      if (!jwtHelper.isTokenExpired(token)) {
        if (!auth.isAuthenticated) {
          var profile = store.get('profile');
          auth.authenticate(profile, token);
          $rootScope.user = profile;
        }
      } else {
        // Either show the login page or use the refresh token to get a new idToken
        $state.go('/');
      }
    }
  });
});

// Set up state provider
app.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    // for any unmatched url, redirect to state "/"
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .state('logout', {
        url: '/logout',
        tempateUrl: 'views/logout.html',
        controller: 'LogoutController'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .state('current', {
        url: '/current',
        templateUrl: '/views/current.html',
        controller: 'CurrentTopicController'
      })
      .state('proposed', {
        url: '/proposed',
        templateUrl: '/views/proposed.html',
        controller: 'ProposedTopicController'
      });
  }
]);
