'use strict';

// Declare app level module which depends on filters, and services
angular.module('shortcircuitIOApp', [
    'shortcircuitIOApp.config',
    'shortcircuitIOApp.controllers',
    'shortcircuitIOApp.decorators',
    'shortcircuitIOApp.directives',
    'shortcircuitIOApp.filters',
    'shortcircuitIOApp.routes',
    'shortcircuitIOApp.services'
  ])

  .run(['simpleLogin', function(simpleLogin) {
    console.log('run'); //debug
    simpleLogin.getUser();
    /* Revolution Slider */
    //show until every thing loaded
    $('.rev-slider-fixed,.rev-slider-full').css('visibility', 'visible');

    //Fixed Size
    $('.rev-slider-banner-fixed').revolution({
        delay: 5000,
        startwidth: 926,
        startheight: 430,
        onHoverStop: "on",
        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 3,
        hideThumbs: 0,
        navigationType: "bullet",
        navigationArrows: "solo",
        navigationStyle: "round",
        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 30,
        navigationVOffset: -40,
        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 5,
        soloArrowLeftVOffset: 0,
        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 5,
        soloArrowRightVOffset: 0,
        touchenabled: "on",
        stopAtSlide: -1,
        stopAfterLoops: -1,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        hideSliderAtLimit: 0,
        fullWidth: "off",
        fullScreen: "off",
        fullScreenOffsetContainer: "#topheader-to-offset",
        shadow: 0

    });


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
  }])
