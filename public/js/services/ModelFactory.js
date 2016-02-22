// public/js/services/ModelFactory.js
var API_PREFIX = '/api/v1';
var modelFactory = angular.module('ModelFactory', []);

modelFactory.factory('TopicModelFactory', ['$http', function($http) {

  return {
    // call to get all nerds
    get : function() {
      return $http.get(API_PREFIX + '/topics');
    },

    // these will work when more API routes are defined on the Node side of things
    // call to POST and create a new topic
    create : function(topic) {
      return $http.post(API_PREFIX + '/topics', topic);
    },

    update : function(id, topic) {
      return $http.put(API_PREFIX + '/topic/' + id, topic);
    },

    // call to DELETE a topic
    delete : function(id) {
      return $http.delete(API_PREFIX + '/topic/' + id);
    }
  };
}]);
