// public/js/controllers/MainController.js
var module = angular.module('AppController', ['ModelService']);

module.controller('MainController', function($scope, TopicService) {

  TopicService.GetCurrentTopic().then(function(response) {
    $scope.topic = response;
  });

});

module.controller('ProposedController', function($scope) {

});
