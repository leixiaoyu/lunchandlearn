var ModelService = angular.module('ModelService', ['ModelFactory']);

ModelService.factory('TopicService', [
  'TopicModelFactory',
  function(TopicModelFactory) {

    var getCurrentTopic = function() {

      var resource = TopicModelFactory.get();
      var currentTopic = resource.then(function(response) {
        var topic = _.findWhere(response.data, function(topic) {
          return topic.isCurrent;
        });
        return topic;
      });

      return currentTopic;
    };

    var addTopic = function(topic) {
      var resource = TopicModelFactory.create(topic);
      return resource.then(function(response) {
        return response;
      });
    };

    return {
      GetCurrentTopic : getCurrentTopic,
      AddTopic : addTopic
    };
  }
]);
