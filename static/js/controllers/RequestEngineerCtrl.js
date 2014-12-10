'use strict';
angular.module('PX2App.RequestEngineer', ['firebase.utils', 'simpleLogin'])
.controller('RequestEngineerCtrl', ['$scope', '$location', '$sce', 'fbutil', 'FBURL', 
	function($scope, $location, $sce, fbutil, FBURL) {
		$scope.t = $location.$$search.t;
   		//console.log($scope.t)

   		$scope.buildTrustedURL = function (url) {
   			return $sce.trustAsResourceUrl(url + "?plan=" + $scope.t);
   		};
   	}])

