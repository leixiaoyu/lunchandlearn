module.exports = function(grunt) {
  grunt.initConfig({
    awsebtdeploy: {
      options: {
        // Task-specific options go here.
        "applicationName": "lunch-and-learn",
        "environmentCNAME": "lunchandlearn-dev.elasticbeanstalk.com",
        "region": "us-west-2",
        "sourceBundle": "./archive.zip",
        "accessKeyId": "AKIAJDBHT67PW3SM6JHA",
        "secretAccessKey": "http://lunchandlearn-dev.elasticbeanstalk.com/",
        "healthPage": "healthPage"
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
          archive: 'archive.zip'
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

  grunt.registerTask('default', ['jshint', 'compress']);
  grunt.registerTask('deploy', ['compress', 'awsebtdeploy']);
};