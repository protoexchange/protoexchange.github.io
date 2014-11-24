'use strict';

/* Controllers */

angular.module('PX2App.FAQCtrl', [])
.controller('FAQCtrl', ['$scope', '$timeout',
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

    $('.accordion .accordion-row:first-child .title').trigger('click');
    zeinaAccordion('.accordion', true);



/*
 * Zeina Accordion
 * Written specially for Zeina Theme
 */
 function zeinaAccordion(selector) {

  $(document).on('click', selector + ' .accordion-row .title,' + selector + ' .accordion-row .open-icon', function() {

    var me = this,
    accordion = $(this).parents('.accordion'),
    $prev,
    $accRow = $(this),
    $accTitle = $accRow.parent(), $this, icon, desc, title, activeRow,
    $accRow = $accTitle.parent(),
    toggle = accordion.data('toggle') == 'on' ? true : false;


    if (toggle === true) {

      icon = $accTitle.find('.open-icon');
      desc = $accTitle.find('.desc');
      title = $accTitle.find('.title');

      if ($accTitle.find('.close-icon').length > 0) {
        desc.slideUp('fast');
        icon.removeClass('close-icon');
        title.removeClass('active');
      }
      else {
        desc.slideDown('fast');
        icon.addClass('close-icon');
        title.addClass('active');
      }

    }
    else {
      $accRow.find('.accordion-row').each(function() {

        $this = $(this);
        icon = $this.find('.open-icon');
        desc = $this.find('.desc');
        title = $this.find('.title');

        /* if this the one which is clicked , slide up  */
        if ($accTitle[0] != this) {
          desc.slideUp('fast');
          icon.removeClass('close-icon');
          title.removeClass('active');
        }

        else {
          desc.slideDown('fast');
          icon.addClass('close-icon');
          title.addClass('active');
        }

      });
    }

  });

    // active div
    $(selector).each(function() {

      var $this = $(this), icon, desc, title, activeRow,
      activeIndex = parseInt($this.data('active-index')),
      activeIndex = activeIndex < 0 ? false : activeIndex;

      if (activeIndex !== false) {
        activeRow = $this.find('.accordion-row').eq(activeIndex);
        icon = activeRow.find('.open-icon');
        desc = activeRow.find('.desc');
        title = activeRow.find('.title');

        desc.slideDown('fast');
        icon.addClass('close-icon');
        title.addClass('active');
      }

    });
  }

},420);

}])

