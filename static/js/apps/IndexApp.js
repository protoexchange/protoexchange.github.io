'use strict';

// Declare app level module which depends on filters, and services
angular.module('PX2App', [
    'PX2App.Kanzi',
    'PX2App.Welcome',
    'PX2App.Success',
    'PX2App.Cancel',
    'PX2App.config',
    'PX2App.decorators',
    'PX2App.directives',
    'PX2App.filters',
    'PX2App.Routes',
    'PX2App.services',
    'angulartics',
    'angulartics.google.analytics'
  ])

  .run(['simpleLogin', function(simpleLogin) {
    simpleLogin.getUser();
  }]);
