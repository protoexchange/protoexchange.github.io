'use strict';
angular.module('PX2App.ResourcesCtrl', [])
.controller('ResourcesCtrl', ['$scope', '$timeout', '$location', '$http',
  function($scope, $timeout, $location, $http) {

$scope.manufacturingResources = [];

$http.get('json/manufacturing-resources.json').
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
     // console.log(data, status); 
      var partners = data.feed.entry;

      for (var p in partners){
        var data = partners[p].content.$t.split("json: ")[1];
        data = data.split("} ")[0];
        var np = eval("(" + data + ")");
        $scope.manufacturingResources.push(np);
      }
      console.log( $scope.manufacturingResources )
      //console.log($scope.partners)
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log(data, status); 
  });

     
}])

