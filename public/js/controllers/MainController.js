// public/js/controllers/MainController.js
var module = angular.module('AppController', ['ModelService']);

module.controller('MainController', ['$scope', '$state', 'auth', 'store', 'TopicService',
  function($scope, $state, auth, store, TopicService) {

    $scope.login = function() {
      auth.signin({}, function(profile, token) {
        // Success callback
        store.set('profile', profile);
        store.set('token', token);

        $scope.user = profile;
        $state.go('current');
      }, function(error) {
        // Error callback
        console.log(error);
      });
    };

    $scope.logout = function() {
      auth.signout();
      store.remove('profile');
      store.remove('token');
      $state.go('logout');
    };

    $scope.isLogin = function() {
      var profile = store.get('profile');
      var token = store.get('token');
      return profile && token;
    };

    $scope.goToHome = function() {
      $state.go('/');
    };
  }
]);

module.controller('HomeController', ['$scope', '$state',
  function($scope, $state) {
    $scope.viewCurrentTopic = function() {
      $state.go('current');
    };
  }
]);

module.controller('CurrentTopicController', ['$scope', 'TopicService',
  function($scope, TopicService) {
    TopicService.GetCurrentTopic().then(function(response) {
      $scope.topic = response;
    });
  }
]);

module.controller('ProposedTopicController', function($scope) {

});

module.controller('LoginController', function($scope) {

});

module.controller('LogoutController', function($scope) {

});
