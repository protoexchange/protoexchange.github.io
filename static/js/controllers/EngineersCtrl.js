'use strict';
angular.module('PX2App.EngineersCtrl', ['firebase.utils', 'simpleLogin'])
.controller('EngineersCtrl', ['$scope',  '$base64', '$http', 'fbutil', 'FBURL', 
  function($scope, $base64, $http, fbutil, FBURL) {

    var LIST_LENGTH = 5;
    var BIO_LENTH = 300;

    $scope.listLength = LIST_LENGTH;
    $scope.bioLength = BIO_LENTH;

    $scope.readMore = function(engineer){
      engineer.showMore = ! engineer.showMore;

      if( engineer.showMore ){
        $scope.listLength = 1000;
        $scope.bioLength = 1000;
      } else{
        $scope.listLength = LIST_LENGTH;
        $scope.bioLength = BIO_LENTH;
      }
    }

    $scope.isTruncated = function(v){

      if (v.background){
        return v.background.length >= $scope.bioLength;
      }
      return false;
      
    }

    $scope.isShortened = function(list){

      if (list){
        return list.length >= $scope.listLength;
      }
      return false;
      
    }



    $http.get('json/data.b64').
    success(function(data, status, headers, config) {
      //console.log("data", )
      $scope.engineerData = angular.fromJson( $base64.decode(data));
      console.log("engineerData", $scope.engineerData)
      
    }).
    error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log(data, status); 
  });
  }])

