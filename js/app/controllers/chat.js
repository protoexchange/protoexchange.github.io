'use strict';

/* Controllers */

angular.module('PX2App.Chat', ['firebase.utils', 'simpleLogin'])

.controller('ChatCtrl', ['$scope', 'messageList', function($scope, messageList) {
  $scope.messages = messageList;
  $scope.addMessage = function(newMessage) {
    if( newMessage ) {
      $scope.messages.$add({text: newMessage});
    }
  };
}])

