// app/routes.js

// grab the nerd model we just created
var Topic = require('./models/topic');
var API_PREFIX = '/api/v1';

module.exports = function(app) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  // sample api route
  app.get(API_PREFIX + '/topics', function(req, res) {
    // use mongoose to get all nerds in the database
    Topic.find(function(err, topics) {

      // if there is an error retrieving, send the error.
      // nothing after res.send(err) will execute
      if (err) {
        res.send(err);
      }

      res.json(topics); // return all topics in JSON format
    });
  });

  // route to handle creating goes here (app.post)
  app.post(API_PREFIX + '/topics', function(req, res) {
    Topic.create(req.body, function(err, topic) {
      if (err) {
        res.send(err);
      }

      res.json(req.body);
    });
  });

  // route to handle delete goes here (app.delete)
  app.delete(API_PREFIX + '/topics/:topic_id', function(req, res) {
    Topic.findByIdAndRemove(req.params.topic_id, function(err, topic) {
      if (err) {
        res.send(err);
      }

      res.json(topic);
    });
  });


  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function(req, res) {
      res.sendfile('./public/index.html'); // load our public/index.html file
  });
};
