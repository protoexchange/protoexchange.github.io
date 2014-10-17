"use strict";

jQuery(document).ready(function($) {


    if (Function('/*@cc_on return document.documentMode===10@*/')()) {
        document.documentElement.className += ' ie10';
    }


    /* Show testimonial after loading */
    $('.testimonial-item').css('visibility', 'visible');




    /* Info Box Listeners */
    $('.alert a.alert-remove').click(function() {
        $(this).parents('.alert').first().fadeOut();
        return false;
    });

    $(window).resize(function() {
        centeringBullets();

        $('.tab-container').trigger('easytabs:midTransition');
        $('#masonry-elements,.portfolio-items').isotope('reLayout');
        setTimeout(function() {
            $('#masonry-elements,.portfolio-items').isotope('reLayout');
        }, 500);
    });

    //place holder fallback
    //$('input, textarea').placeholder();

    //init tooltip tipsy
    $('.social-media-icon,.tool-tip').tipsy({gravity: 's', fade: true, offset: 5});

    //Remove tipsy tooltip event from image overlay elements
    $('.item_img_overlay_content .social-media-icon,.top-bar .social-media-icon').unbind('mouseenter');

    //Callout Box And Message Box Mobile Button
    $('.message-box ,.callout-box').each(function() {
        var $box = $(this);
        var $button = $box.find(".btn");
        $box.append('<button href="' + $button.attr("href") + '" class="' + $button.attr("class") + ' btn-mobile">' + $button.html() + '</button>');

    });

    //stickyMenu();

    if ($("html").hasClass("lt-ie9")) {

        //bread crumb last child fix for IE8
        $('.breadcrumbs li:last-child').addClass('last-child');
        $('.navigation > li:last-child').addClass('last-child-nav');
        $('.flickr_badge_wrapper .flickr_badge_image').addClass('flicker-ie');
        $('.flickr_badge_wrapper .flickr_badge_image:nth-child(3n+1)').addClass('last-child-flicker');
        $('.content-style3 ').css('width', '100%').css('width', '-=28px');
        $('.section-subscribe input[type=text]').css('width', '100%').css('width', '-=40px');
        $('.blog-search .blog-search-input').css('width', '100%').css('width', '-=40px');

        $('.tab').click(function() {
            setTimeout(function() {
                $('.content-style3 ').css('width', '100%').css('width', '-=28px');
                $('.section-subscribe input[type=text]').css('width', '100%').css('width', '-=40px');
            }, 500);

        });

        setInterval(function() {
            $('#masonry-elements,.portfolio-items').isotope('reLayout');
        }, 1000);
    }
    ;

    centeringBullets();

    var $cont = $('.portfolio-items');

    // IE 8
    if ($("html").hasClass("lt-ie9")) {
        $cont.isotope({
            itemSelector: '.portfolio-items .thumb-label-item',
            masonry: {columnWidth: $('.isotope-item:first').width(), gutterWidth: 6},
            filter: '*',
            transformsEnabled: false,
            layoutMode: 'masonry',
            animationEngine: 'css'
        });
    }
    else {
        $cont.isotope({
            itemSelector: '.portfolio-items .thumb-label-item',
            masonry: {columnWidth: $('.isotope-item:first').width(), gutterWidth: 6},
            filter: '*',
            transformsEnabled: false,
            layoutMode: 'masonry',
            //  animationEngine: 'css'
        });
    }

});


/***
 * Get youtube url.
 *
 * @param url
 * @returns {*}
 */
function getYoutubeId(url) {
    var regExp = /^.*((youtu.[\w]{1,3}\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[7].length == 11) {
        return match[7];
    } else {
        return false;
    }
}
/***
 * Get vimeo url.
 *
 * @param url
 * @returns {*}
 */
function getVimeoId(url) {
    var regExp = /http:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/;
    var match = url.match(regExp);

    if (match) {
        return  match[2];
    } else {
        return false;
    }
}


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

/* Sticky Menu */
function stickyMenu() {

    $(window).scroll(function() {
        if ($(window).scrollTop() > 35) {
            $('#header').addClass('sticky-header');
            $('.sticky-navigation,#to-top-button').fadeIn();
        }
        else {
            $('#header').removeClass('sticky-header');
            $('.sticky-navigation,#to-top-button').fadeOut();
        }
    });
}

/* Centering Bullets */
function centeringBullets() {
    //Bullets center fixing in revolution slide
    $('.simplebullets,.slider-fixed-frame .home-bullets').each(function() {
        var $this = $(this), w = $this.width();
        $this.css('margin-left', -(w / 2) + 'px');
    });
}