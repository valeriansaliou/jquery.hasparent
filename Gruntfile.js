/*
 * jQuery hasParent
 *
 * Copyright 2014, Valérian Saliou
 * Author: Valérian Saliou <valerian@valeriansaliou.name>
 */


module.exports = function(grunt) {


  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    // Task: JSHint
    jshint: {
      files: ['./jquery.hasparent.js']
    }
  });


  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');


  // Register tasks
  grunt.registerTask('default', function() {
    return grunt.warn('Usage:' + '\n\n' + 'jshint - grunt jshint' + '\n\n');
  });

};
