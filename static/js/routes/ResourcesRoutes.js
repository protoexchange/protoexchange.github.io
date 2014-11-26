"use strict";

angular.module('PX2App.Routes', ['ngRoute'])

.constant('ROUTES', {
  '/manufacturers': {
    title: 'PX | Manufacturers',
   controller: 'ResourcesCtrl',
   templateUrl: 'static/partials/resources.manufacturers.html'
 },
 '/documents': {
  title: 'PX | Documents',
  controller: 'ResourcesCtrl',
  templateUrl: 'static/partials/resources.documents.html'

}
})

  /**
   * Adds a special `whenAuthenticated` method onto $routeProvider. This special method,
   * when called, invokes the requireUser() service (see simpleLogin.js).
   *
   * The promise either resolves to the authenticated user object and makes it available to
   * dependency injection (see AuthCtrl), or rejects the promise if user is not logged in,
   * forcing a redirect to the /login page
   */
   .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    // credits for this idea: https://groups.google.com/forum/#!msg/angular/dPr9BpIZID0/MgWVluo_Tg8J
    // unfortunately, a decorator cannot be use here because they are not applied until after
    // the .config calls resolve, so they can't be used during route configuration, so we have
    // to hack it directly onto the $routeProvider object

    $locationProvider.hashPrefix('!');

  }])

  // configure views; the authRequired parameter is used for specifying pages
  // which should only be available while logged in
  .config(['$routeProvider', 'ROUTES', function($routeProvider, ROUTES) {
    angular.forEach(ROUTES, function(route, path) {

        // all other routes are added normally
        $routeProvider.when(path, route);

      });
    // routes which are not in our map are redirected to /home
    $routeProvider.otherwise({redirectTo: '/documents'});
  }])

