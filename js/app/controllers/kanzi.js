'use strict';

/* Controllers */

angular.module('PX2App.Kanzi', [])
.controller('KanziCtrl', ['$scope', '$timeout', '$location', '$http', '$anchorScroll', 
  function($scope, $timeout, $location, $http, $anchorScroll) {

    $scope.leaveAMessage = function() {
     olark('api.box.expand')
   }


   $scope.gotoServices = function() {

    $location.hash("services");
    $anchorScroll();
  };


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


    /* Revolution Slider */
    //show until every thing loaded
    $('.rev-slider-fixed,.rev-slider-full').css('visibility', 'visible');

    
    /* Full */
    $('.rev-slider-banner-full').revolution({
      delay: 5000,
      startwidth: 1170,
      startheight: 500,
      onHoverStop: "on",
      thumbWidth: 100,
      thumbHeight: 50,
      thumbAmount: 3,
      hideThumbs: 0,
      navigationType: "none",
      navigationArrows: "solo",
      navigationStyle: "bullets",
      navigationHAlign: "center",
      navigationVAlign: "bottom",
      navigationHOffset: 30,
      navigationVOffset: 30,
      soloArrowLeftHalign: "left",
      soloArrowLeftValign: "center",
      soloArrowLeftHOffset: 20,
      soloArrowLeftVOffset: 0,
      soloArrowRightHalign: "right",
      soloArrowRightValign: "center",
      soloArrowRightHOffset: 20,
      soloArrowRightVOffset: 0,
      touchenabled: "on",
      stopAtSlide: -1,
      stopAfterLoops: -1,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      hideSliderAtLimit: 0,
      fullWidth: "on",
      fullScreen: "off",
      fullScreenOffsetContainer: "#topheader-to-offset",
      shadow: 0

    }); 

    /* Search Box Effect Handler */

    //Click
    $('.searchbox .searchbox-icon,.searchbox .searchbox-inputtext').bind('click', function() {
      var $search_tbox = $('.searchbox .searchbox-inputtext');
      $search_tbox.css('width', '120px');
      $search_tbox.focus();
      $('.searchbox', this).addClass('searchbox-focus');
    });

    //Blur
    $('.top-bar .searchbox-inputtext,body').bind('blur', function() {
      var $search_tbox = $('.searchbox .searchbox-inputtext');
      $search_tbox.css('width', '0px');
      $('.searchbox', this).removeClass('searchbox-focus');
    });

    stickyMenu();

    // Clients Carousel
    $(".clients-list").carouFredSel({
      items: {
        width: 170,
        visible: {
          min: 1,
          max: 6
        }
      },
      prev: {
        button: function() {
          return jQuery(this).closest('.row-fluid').find('.carousel-prev');
        },
        key: "left"
      },
      next: {
        button: function() {
          return jQuery(this).closest('.row-fluid').find('.carousel-next');
        },
        key: "right"
      },
      responsive: true,
      auto: false,
      scroll: {
        onAfter: function() {
                /**
                 We have bug in chrome, and we need to force chrome to re-render specific portion of the page
                 after it's complete the scrolling animation so this is why we add these dumb lines.
                 */
                 if (/chrome/.test(navigator.userAgent.toLowerCase())) {
                  this.style.display = 'none';
                  this.offsetHeight;
                  this.style.display = 'block';
                }

              },
              items: 1
            }

          }, {
            debug: false
          });

zeinaAccordion('.accordion', true);

$('body').append('<div id="to-top-button"> <i class="fa fa-angle-up"></i> </div>');


$('#to-top-button').click(function() {
  $('body,html').animate({
    scrollTop: 0
  });
});

if($location.$$hash == "services"){
      $scope.gotoServices()
    }

},420);

}])

