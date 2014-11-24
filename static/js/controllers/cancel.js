'use strict';

angular.module('PX2App.Cancel', ['firebase.utils', 'simpleLogin'])
.controller('CancelCtrl', ['$scope', '$timeout', '$location', '$sce', 
	function($scope, $timeout, $location, $sce) {

		$scope.email = $location.$$search.email;

		$scope.buildTypeFormURL = function (email) {
			return $sce.trustAsResourceUrl('https://protoexchange.typeform.com/to/LOufER?email=' + email);
		};

	}])

