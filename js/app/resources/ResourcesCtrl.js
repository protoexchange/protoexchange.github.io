'use strict';

/* Controllers */

angular.module('PX2App.controllers', ['firebase.utils', 'simpleLogin'])
.controller('HomeCtrl', ['$scope', '$timeout', '$location', '$http', '$anchorScroll', 'fbutil', 'user', 'FBURL', 
  function($scope, $timeout, $location, $http, $anchorScroll, fbutil, user, FBURL) {

$scope.manufacturingResources = [];

$scope.leaveAMessage = function() {
 olark('api.box.expand')
}

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

   
    $scope.gotoServices = function() {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash('services-section');
        // call $anchorScroll()
        $anchorScroll();
      };


      $scope.syncedValue = fbutil.syncObject('syncedValue');
      $scope.user = user;
      $scope.FBURL = FBURL;

      centeringBullets();

      var $masonryElement = $('#masonry-elements');
      $masonryElement.isotope({
        transformsEnabled: false,
        masonry: {
          columnWidth: 270,
          gutterWidth: 15
        }
      });

      $masonryElement.infinitescroll({
        navSelector: '#masonry-elements-nav', // selector for the paged navigation
        nextSelector: '#masonry-elements-nav a:first', // selector for the NEXT link (to page 2)
        itemSelector: '.feature', // selector for all items you'll retrieve
        loading: {
          finishedMsg: 'No more pages to load.',
          img: 'images/loading.gif',
          selector: '#loading',
          speed: 'normal'
        },
        maxPage: 3
      },
    // call Isotope as a callback
    function(newElements) {
      embed_video_processing();
      var $newElements = $(newElements);
      $masonryElement.append($newElements);
      $masonryElement.isotope('appended', $newElements);

      $masonryElement.find('.cycle-slideshow').cycle({
      });
    });

      $('#masonry-elements,.portfolio-items').isotope('reLayout');

      $timeout(function(){

        $anchorScroll();

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

},420);

}])

.controller('ChatCtrl', ['$scope', 'messageList', function($scope, messageList) {
  $scope.messages = messageList;
  $scope.addMessage = function(newMessage) {
    if( newMessage ) {
      $scope.messages.$add({text: newMessage});
    }
  };
}])

.controller('LoginCtrl', ['$scope', 'simpleLogin', '$location', function($scope, simpleLogin, $location) {
  $scope.email = null;
  $scope.pass = null;
  $scope.confirm = null;
  $scope.createMode = false;

  $scope.login = function(email, pass) {
    $scope.err = null;
    simpleLogin.login(email, pass)
    .then(function(/* user */) {
      $location.path('/account');
    }, function(err) {
      $scope.err = errMessage(err);
    });
  };

  $scope.createAccount = function() {
    $scope.err = null;
    if( assertValidAccountProps() ) {
      simpleLogin.createAccount($scope.email, $scope.pass)
      .then(function(/* user */) {
        $location.path('/account');
      }, function(err) {
        $scope.err = errMessage(err);
      });
    }
  };

  function assertValidAccountProps() {
    if( !$scope.email ) {
      $scope.err = 'Please enter an email address';
    }
    else if( !$scope.pass || !$scope.confirm ) {
      $scope.err = 'Please enter a password';
    }
    else if( $scope.createMode && $scope.pass !== $scope.confirm ) {
      $scope.err = 'Passwords do not match';
    }
    return !$scope.err;
  }

  function errMessage(err) {
    return angular.isObject(err) && err.code? err.code : err + '';
  }
}])

.controller('AccountCtrl', ['$scope', 'simpleLogin', 'fbutil', 'user', '$location',
  function($scope, simpleLogin, fbutil, user, $location) {
      // create a 3-way binding with the user profile object in Firebase
      var profile = fbutil.syncObject(['users', user.uid]);
      profile.$bindTo($scope, 'profile');

      // expose logout function to scope
      $scope.logout = function() {
        profile.$destroy();
        simpleLogin.logout();
        $location.path('/login');
      };

      $scope.changePassword = function(pass, confirm, newPass) {
        resetMessages();
        if( !pass || !confirm || !newPass ) {
          $scope.err = 'Please fill in all password fields';
        }
        else if( newPass !== confirm ) {
          $scope.err = 'New pass and confirm do not match';
        }
        else {
          simpleLogin.changePassword(profile.email, pass, newPass)
          .then(function() {
            $scope.msg = 'Password changed';
          }, function(err) {
            $scope.err = err;
          })
        }
      };

      $scope.clear = resetMessages;

      $scope.changeEmail = function(pass, newEmail) {
        resetMessages();
        profile.$destroy();
        simpleLogin.changeEmail(pass, newEmail)
        .then(function(user) {
          profile = fbutil.syncObject(['users', user.uid]);
          profile.$bindTo($scope, 'profile');
          $scope.emailmsg = 'Email changed';
        }, function(err) {
          $scope.emailerr = err;
        });
      };

      function resetMessages() {
        $scope.err = null;
        $scope.msg = null;
        $scope.emailerr = null;
        $scope.emailmsg = null;
      }
    }
    ]);