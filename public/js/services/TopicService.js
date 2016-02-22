var ModelService = angular.module('ModelService', ['ModelFactory']);

ModelService.factory('TopicService', [
  'TopicModelFactory',
  function(TopicModelFactory) {

    var getCurrentTopic = function() {

      var resource = TopicModelFactory.get();
      var currentTopic = resource.then(function(response) {
        var topic = _.find(response.data, function(topic) {
          return topic.isCurrent;
        });
        return topic;
      });

      return currentTopic;
    };

    var updateTopic = function(topic) {
      var resource = TopicModelFactory.update(topic._id, topic);
      return resource.then(function(response) {
        return response.data;
      });
    };

    var addTopic = function(topic) {
      var resource = TopicModelFactory.create(topic);
      return resource.then(function(response) {
        return response;
      });
    };

    return {
      GetCurrentTopic : getCurrentTopic,
      AddTopic : addTopic,
      UpdateTopic : updateTopic
    };
  }
]);
