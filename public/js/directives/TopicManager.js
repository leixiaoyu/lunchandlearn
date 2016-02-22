angular.controller('TopicManagerDirectiveController', ['$scope', function($scope) {
  $scope.cancel = function() {
    
  }
}])
.directive('topicManager', function() {
  return {
    restrict: 'E',
    scope: {
      editable: '=',
      topic: '='
    },
    templateUrl: 'views/directive_topic_manager.html',
    controller: 'TopicManagerDirectiveController',
  };
});
