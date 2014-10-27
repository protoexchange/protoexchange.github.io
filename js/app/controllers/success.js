'use strict';

angular.module('PX2App.Success', ['firebase.utils', 'simpleLogin'])
.controller('SuccessCtrl', ['$scope', '$timeout', '$location', '$sce', 
	function($scope, $timeout, $location, $sce) {

		$scope.account_code = $location.$$search.account_code;
		$scope.plan = $location.$$search.plan;

		if ($scope.account_code && $scope.plan){
			console.log($scope.account_code, $scope.plan);
		}

	}])

