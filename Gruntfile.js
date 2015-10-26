module.exports = function(grunt) {
  var guid = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0,v=c=='x'?r:r&0x3|0x8;return v.toString(16);
    });
  };

  grunt.initConfig({
    guid: guid(),
    awsebtdeploy: {
      options: {
        // Task-specific options go here.
        "applicationName": "lunch-and-learn",
        "environmentCNAME": "lunchandlearn-dev.elasticbeanstalk.com",
        "region": "us-west-2",
        "sourceBundle": "./<%= guid %>.zip",
        "healthPage": "http://lunchandlearn-dev.elasticbeanstalk.com/",
        "s3": {
          "bucket": "elasticbeanstalk-us-west-2-427262291085",
          "key": "lunch-and-learn"
        }
      },
      your_target: {
        // Target-specific options go here.
      },
    },

    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['jshint'],
        options: {
          spawn: false
        }
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'app/**/*.js', 'public/js/**/*.js']
    },

    compress: {
      main: {
        options: {
          archive:  '<%= guid %>.zip'
        },
        files: [
          { src: ['**'], dest: '/', filter: 'isFile' }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-awsebtdeploy');

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('deploy', ['compress', 'awsebtdeploy']);
};
