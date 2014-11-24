'use strict';

angular.module('PX2App.Success', ['firebase.utils', 'simpleLogin'])
.controller('SuccessCtrl', ['$scope', '$timeout', '$location', '$sce', '$analytics', 
	function($scope, $timeout, $location, $sce, $analytics) {

		//$scope.account_code = $location.$$search.account_code;
		$scope.plan = $location.$$search.plan;

		if ($scope.plan){

			$analytics.eventTrack('Completed', {  
				category: 'Subscription', 
				label: $scope.plan
			});
		}

	}])

