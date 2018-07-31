"use strict";

// Animate loader off screen
$(window).load(function() {

    $(".loader").fadeOut("slow");
});


//Contact Us
$("#submit_btn").click(function() {
    //get input field values
    //alert("hello");
     $('#submit_handle').click();
    var user_name = $('input[name=name]').val();
    var user_email = $('input[name=email]').val();
    var user_telephone = $('input[name=phone]').val();
    //var user_subject      = $('input[name=subject]').val();
    var user_message = $('textarea[name=message]').val();

    //simple validation at client's end
    var post_data, output;
    var proceed = true;
    if (user_name == "") {
        proceed = false;
    }
    if (user_email == "") {
        proceed = false;
    }
    if (user_telephone == "") {
        proceed = false;
    }

    if (user_message == "") {
        proceed = false;
    }

    //everything looks good! proceed...
    if (proceed) {
        //data to be sent to server
        post_data = { 'userName': user_name, 'userEmail': user_email, 'userTelephone': user_telephone, 'userMessage': user_message };

        //Ajax post data to server
        $.post('contact.php', post_data, function(response) {

            //load json data from server and output message
            if (response.type == 'error') {
                output = '<div class="alert-danger" style="padding:10px; margin-bottom:25px;">' + response.text + '</div>';
            } else {
                output = '<div class="alert-success" style="padding:10px; margin-bottom:25px;">' + response.text + '</div>';

                //reset values in all input fields
                $('.form_class input').val('');
                $('.form_class textarea').val('');
            }

            $("#result").hide().html(output).slideDown();
        }, 'json');

    }
});

//reset previously set border colors and hide all message on .keyup()
$(".form_class input, .form_class textarea").keyup(function() {
    $("#result").slideUp();
});



// Initializing WOW

if ($(window).width() > 767) {
    new WOW().init();
}

// Main Swiper Slider Initializing

var mySwiper = new Swiper('.page_content_main_slider_1', {
    effect: 'fade'
});

// Main Swiper Slider 2 Initializing

var mySwiper = new Swiper('.page_content_main_slider_2', {

});

// Main Swiper Slider 5 Initializing

var mySwiper = new Swiper('.page_content_main_slider_5', {
    pagination: '.swiper-pagination',
    paginationClickable: true
});

// Main Swiper Slider 3 Initializing

var interleaveOffset = -.5;

var interleaveEffect = {

    onProgress: function(swiper, progress) {

        for (var i = 0; i < swiper.slides.length; i++) {

            var slide = swiper.slides[i];
            var translate, innerTranslate;
            progress = slide.progress;

            if (progress > 0) {
                translate = progress * swiper.width;
                innerTranslate = translate * interleaveOffset;
            } else {
                innerTranslate = Math.abs(progress * swiper.width) * interleaveOffset;
                translate = 0;
            }
            if (i == 0) {
                console.log(progress + ' <- progress');
            }

            $(slide).css({
                transform: 'translate3d(' + translate + 'px,0,0)'
            });

            $(slide).find('.slide-inner').css({
                transform: 'translate3d(' + innerTranslate + 'px,0,0)'
            });
        }
    },

    onTouchStart: function(swiper) {
        for (var i = 0; i < swiper.slides.length; i++) {
            $(swiper.slides[i]).css({ transition: '' });
        }
    },

    onSetTransition: function(swiper, speed) {
        for (var i = 0; i < swiper.slides.length; i++) {
            $(swiper.slides[i])
                .find('.slide-inner')
                .andSelf()
                .css({ transition: speed + 'ms' });
        }
    }
};

var swiperOptions = {
    loop: true,
    speed: 1000,
    grabCursor: true,
    watchSlidesProgress: true,
    keyboardControl: true
};


swiperOptions = $.extend(swiperOptions, interleaveEffect);


var swiper = new Swiper('.page_content_main_slider_3', swiperOptions);


// Team Members Carousel Initializing

$(document).ready(function() {
    $(".team_member_slider").owlCarousel({
        items: 4,
        margin: 30,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            769: {
                items: 3,
                margin: 15
            },
            1000: {
                items: 4
            }
        }
    });
});

// Progress Bar Animation On Screen

var progressBar = $(".progress-bar");
progressBar.each(function(indx) {
    $(this).css("width", $(this).attr("aria-valuenow") + "%");
});

// Cube Portfolio

(function($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    $('#js-grid-mosaic-flat').cubeportfolio({
        filters: '#js-filters-mosaic-flat',
        layoutMode: 'mosaic',
        sortByDimension: true,
        mediaQueries: [{
            width: 1500,
            cols: 3,
        }, {
            width: 1100,
            cols: 3,
        }, {
            width: 800,
            cols: 3,
        }, {
            width: 480,
            cols: 2,
            options: {
                caption: '',
                gapHorizontal: 15,
                gapVertical: 15,
            }
        }],
        defaultFilter: '*',
        animationType: 'fadeOutTop',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'fadeIn',
        displayType: 'fadeIn',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        plugins: {
            loadMore: {
                element: '#js-loadMore-mosaic-flat',
                action: 'click',
                loadItems: 3,
            }
        },
    });
})(jQuery, window, document);

// Blog Slider

$(document).ready(function() {
    $(".blog_slider").owlCarousel({
        items: 3,
        loop: true,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            769: {
                items: 2,
                margin: 15
            },
            1100: {
                items: 3,
                margin: 30
            }
        }
    });
});

// Clients's Feedback Carousel Initializing

$(document).ready(function() {
    $(".feedback_slider").owlCarousel({
        items: 1,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        dot: true
    });
});

// Client Icon Carousel Initializing

$(document).ready(function() {
    $(".page_content_client_inner_slider").owlCarousel({
        items: 6,
        loop: true,
        margin: 60,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
                margin: 20
            },
            500: {
                items: 4,
                margin: 30
            },
            1100: {
                items: 6,
                margin: 60
            }
        }
    });
});

// Google Map

function Map(imageName) {
    if ($('#google_map').length) {
        //Contact Map
        var map;
        map = new GMaps({
            el: '#google_map',
            lat: 43.645337,
            lng: -79.395647,
            scrollwheel: false,
            zoom: 18
        });
        map.drawOverlay({
            lat: map.getCenter().lat(),
            lng: map.getCenter().lng(),
            layer: 'overlayLayer',
            content: '<div class="overlay_map"><img src="images/' + imageName + '" alt="marker"></div>',
            verticalAlign: 'top',
            horizontalAlign: 'center'
        });
    }
}
Map("../img/map-marker.png");

// Navbar

// navbars
var navbars = {
    // full screen side navbar
    sideNavBar: function() {
        $('.side-menu-button').on('click', function() {
            $('.sidenav').toggleClass("mySideBar");
            $(this).toggleClass("actives");
            $('.side-menu-button > i').toggleClass("fa-bars");
            $('.side-menu-button > i').toggleClass("fa-times");
        });
        $('.sidenav ul >li a').on('click', function() {
            $('.sidenav').removeClass("mySideBar");
            $('.side-menu-button').removeClass("actives");
            $('.side-menu-button > i').toggleClass("fa-bars");
            $('.side-menu-button > i').toggleClass("fa-times");
        });
    },
    //chainging navbar color on scroll
    navbarColor: function() {
        //scroll nav colors
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 70) { // Set position from top to add class
                $('.navbar_1').addClass("shrink");
                $('.pink .navbar-brand> img').attr('src', 'img/logo/ITClogo.png');
                $('.white .navbar-brand> img').attr('src', 'img/logo/ITClogo.png');
                // $('.side_button_3').addClass('position_fixed');
            } else {
                $('.navbar').removeClass("shrink");
                $('.pink .navbar-brand> img').attr('src', 'img/logo/ITClogo.png');
                $('.white .navbar-brand> img').attr('src', 'img/logo/ITClogo.png');
                $('.index9 .navbar-brand> img').attr('src', 'img/logo/ITClogo.png');
                //     $('.side_button_3').removeClass('position_fixed');
            }


        });
    },
    index2Navbar: function() {

        $('.index2 .navbar-toggle').on('click', function() {
            window.scrollTo(0, 72);
        });


    }


};

var $top = $('.navbar-brand > img').offset().top;
$('.side_button_3').css({ 'top': $top });
console.log($top);
// calling navbars

navbars.sideNavBar();
if (!($('.navbar_1').hasClass('eight'))) {
    navbars.navbarColor();
}
navbars.index2Navbar();

//scroll sections on clicking Links

$(".scroll").on('click', function(event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
});

// gradient layout

function checkGradeient() {
    //gradient animations
    var colors = new Array(
        [62, 35, 255], [60, 255, 60], [255, 35, 98], [45, 175, 230], [255, 0, 255], [255, 128, 0]);

    var step = 0;
    //color table indices for:
    // current color left
    // next color left
    // current color right

    // next color right
    var colorIndices = [0, 1, 2, 3];

    //transition speed
    var gradientSpeed = 0.002;

    function updateGradient() {

        if ($ === undefined) return;

        var c0_0 = colors[colorIndices[0]];
        var c0_1 = colors[colorIndices[1]];
        var c1_0 = colors[colorIndices[2]];
        var c1_1 = colors[colorIndices[3]];

        var istep = 1 - step;
        var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
        var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
        var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
        var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

        var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
        var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
        var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
        var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

        $('#gradient').css({
            background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
        }).css({
            background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
        });

        step += gradientSpeed;
        if (step >= 1) {
            step %= 1;
            colorIndices[0] = colorIndices[1];
            colorIndices[2] = colorIndices[3];

            //pick two new target color indices
            //do not pick the same as the current one
            colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
            colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

        }
    }

    setInterval(updateGradient, 10);
}

if ($('body').hasClass("gradientLayout")) {
    checkGradeient()
}

/* Numcounter Plugin Initializing */

$('.count').each(function() {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 8000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        }
    });
});

//* Slider Revolution Initializing

function setREVStartSize(e) {
    try {
        var i = jQuery(window).width(),
            t = 9999,
            r = 0,
            n = 0,
            l = 0,
            f = 0,
            s = 0,
            h = 0;
        if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function(e, f) {
                f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
            }), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) {
            var u = (e.c.width(), jQuery(window).height());
            if (void 0 != e.fullScreenOffsetContainer) {
                var c = e.fullScreenOffsetContainer.split(",");
                if (c) jQuery.each(c, function(e, i) {
                    u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
                }), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
            }
            f = u
        } else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
        e.c.closest(".rev_slider_wrapper").css({
            height: f
        })
    } catch (d) {
        console.log("Failure at Presize of Slider:" + d)
    }
};

var revapi2,
    tpj = jQuery;
tpj(document).ready(function() {
    if (tpj("#rev_slider_2_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_2_1");
    } else {
        revapi2 = tpj("#rev_slider_2_1").show().revolution({
            sliderType: "standard",
            jsFileLocation: "//localhost/revslider-standalone/revslider/public/assets/js/",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 4000,
            shadow:1,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "on",
                touch: {
                    touchenabled: "on",
                    touchOnDesktop: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {

                    enable: false,
                    style: 'hesperiden',
                    tmp: '',
                    rtl: false,
                    hide_onleave: false,
                    hide_onmobile: true,
                    hide_under: 0,
                    hide_over: 9999,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,

                    left: {
                        container: 'slider',
                        h_align: 'left',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: 0
                    },

                    right: {
                        container: 'slider',
                        h_align: 'right',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    hide_onmobile: false,
                    hideBulletsOnMobile:"off",
                    hide_under: 600,
                    style: "hermes",
                    hide_onleave: false,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 30,
                    space: 10,
                    tmp: '<span class="tp-bullet-inner"></span>'
                }
            },
            responsiveLevels: [1240, 1024, 778, 778],
            visibilityLevels: [1240, 1024, 778, 778],
            gridwidth: [1170, 970, 750, 750],
            gridheight: [600, 768, 960, 960],
            lazyType: "smart",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                speedbg: 0,
                speedls: 0,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 47, 48, 49, 50, 51, 55],
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }










    var $window = $(window);
    var $mainnavBar = $('.eight');
    var $mainMenutop = $('.eight-outer');
    if ($('.eight-outer').length) {
        // Run this on scroll for fixed.
        $window.scroll(function() {
            if ($window.scrollTop() > $mainMenutop.offset().top) {
                // Make the div sticky.
                $mainnavBar.addClass('sticky');
            } else {
                // Unstick the div.
                $mainnavBar.removeClass('sticky');
            }
        });
    }
}); /*ready*/