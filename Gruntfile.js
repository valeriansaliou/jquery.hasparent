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


  // Map tasks
  var GRUNT_TASKS_TEST = {
    all: [['lint',0]]
  };

  var GRUNT_TASKS_LINT = {
    js: [['jshint',0]]
  };


  // Register tasks
  grunt.registerTask('default', function() {
    return grunt.warn('Usage:' + '\n\n' + 'test - grunt test' + '\n\n');
  });

  grunt.registerTask('test', function() {
    for(var t in GRUNT_TASKS_TEST) {
      for(var i in GRUNT_TASKS_TEST[t]) {
        grunt.task.run(GRUNT_TASKS_TEST[t][i][0] + (GRUNT_TASKS_TEST[t][i][1] ? (':' + t) : ''));
      }
    }
  });

  grunt.registerTask('lint', function(t) {
    var lint_t_all = [];

    if(t === null) {
      for(var _t in GRUNT_TASKS_LINT) {
        lint_t_all.push(_t);
      }
    } else if(typeof GRUNT_TASKS_LINT[t] != 'object') {
      return grunt.warn('Invalid lint target name.\n');
    } else {
      lint_t_all.push(t);
    }

    for(var c in lint_t_all) {
      t = lint_t_all[c];

      for(var i in GRUNT_TASKS_LINT[t]) {
        grunt.task.run(GRUNT_TASKS_LINT[t][i][0] + (GRUNT_TASKS_LINT[t][i][1] ? (':' + t) : ''));
      }
    }
  });

};
