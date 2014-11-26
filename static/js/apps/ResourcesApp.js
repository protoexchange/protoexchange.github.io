'use strict';

// Declare app level module which depends on filters, and services
angular.module('PX2App', [
	'PX2App.Kanzi',
	'PX2App.Routes',
	'PX2App.ResourcesCtrl',
	'angulartics',
	'angulartics.google.analytics'
	])
.run(['$location', '$rootScope', function($location, $rootScope) {
	$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
		$rootScope.pageTitle = current.$$route.title;
	});
}]);
