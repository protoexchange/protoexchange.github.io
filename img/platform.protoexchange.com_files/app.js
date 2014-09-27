'use strict';

// Declare app level module which depends on filters, and services
angular.module('shortcircuitIOApp', [
    'shortcircuitIOApp.config',
    'shortcircuitIOApp.controllers',
    'shortcircuitIOApp.decorators',
    'shortcircuitIOApp.directives',
    'shortcircuitIOApp.filters',
    'shortcircuitIOApp.routes',
    'shortcircuitIOApp.services'
  ])

  .run(['simpleLogin', function(simpleLogin) {
    console.log('run'); //debug
    simpleLogin.getUser();
  }])
