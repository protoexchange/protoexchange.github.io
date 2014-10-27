'use strict';

/* Controllers */

angular.module('PX2App.TermsCtrl', [])
.controller('TermsCtrl', ['$scope', '$timeout',
  function($scope, $timeout) {

    $('body').append('<div id="to-top-button"> <i class="fa fa-angle-up"></i> </div>');

    $scope.leaveAMessage = function() {
     olark('api.box.expand')
   }

   $timeout(function(){

    $('.navigation').AXMenu({
        showArrowIcon: true, // true for showing the menu arrow, false for hide them
        firstLevelArrowIcon: '',
        menuArrowIcon: ""
      });


    /* Mobile Nav */
    $('.header .mobile-nav ').append($('.navigation').html());
    $('.header .mobile-nav li').bind('click', function(e) {

      var $this = $(this);
      var $ulKid = $this.find('>ul');
      var $ulKidA = $this.find('>a');

      if ($ulKid.length === 0 && $ulKidA[0].nodeName.toLowerCase() === 'a') {
        window.location.href = $ulKidA.attr('href');
      }
      else {
        $ulKid.toggle(0, function() {
          if ($(this).css('display') === 'block') {
            $ulKidA.find('.icon-chevron-down').removeClass('icon-chevron-down').addClass('icon-chevron-up');
          }
          else {
            $ulKidA.find('.icon-chevron-up').removeClass('icon-chevron-up').addClass('icon-chevron-down');
          }
        });
      }

      e.stopPropagation();

      return false;
    });

    $('.mobile-menu-button').click(function() {
      $('.mobile-nav').toggle();
    });

    $('.header .mobile-nav .icon-chevron-right').each(function() {
      $(this).removeClass('icon-chevron-right').addClass('icon-chevron-down');
    });

    $('#to-top-button').click(function() {

      $('body,html').animate({
        scrollTop: 0
      });
    });

  },420);

}])

