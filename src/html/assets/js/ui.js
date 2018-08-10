'use strict';

$(document).ready(function () {

    /***** Fixed Header *****/
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 150) {
            $('.header').addClass('header-fixed');
        } else {
            $('.header').removeClass('header-fixed');
        }
    });

    /***** Mobile Menu *****/
    $('.header__menuMobile').on("click", function () {
        $('.nav__menu').slideToggle();
    });
    menuToggle();

    /***** Slick Slider *****/
    updateSlider();
    $('.home__bannerSlider').slick({
        dots: false,
        infinite: false,
        speed: 800,
        slidesToShow: 1,
        slidToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                dots: false,
                infinite: false,
                speed: 800,
                slidesToShow: 1,
                slidToScroll: 1
            }
        }, {
            breakpoint: 991,
            settings: {
                dots: true,
                arrows: false,
                infinite: false,
                speed: 800,
                slidesToShow: 1,
                slidToScroll: 1
            }
        }]
    });

    $('.testimonialSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        infinite: false,
        swipe: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: false,
                infinite: false,
                swipe: false
            }
        }, {
            breakpoint: 767,
            settings: {
                dots: false,
                infinite: false,
                speed: 800,
                slidesToShow: 1,
                slidToScroll: 1,
                arrows: false
            }
        }]
    });

    $('.testimonialSliderNav > li').click(function () {
        $('.testimonialSlider').slick('slickGoTo', $(this).index());
    });

    $('.testimonialSliderNav li').removeClass('slick-active');
    $('.testimonialSliderNav li').eq(0).addClass('slick-active');
    $('.testimonialSlider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var mySlideNumber = nextSlide;
        $('.testimonialSliderNav li').removeClass('slick-active');
        $('.testimonialSliderNav li').eq(mySlideNumber).addClass('slick-active');
    });

    mobileTestimonialSlier();

    /***** Light Box *****/
    $('.home__testimonialSection li .home__videoicon').on("click", function () {
        $('.lighbox-overlay, .lightbox-container').fadeIn();
        $('.lightbox-container').hide();
        var videoLink = $(this).attr('data-videoURL');
        $('.lightbox-container').show();
        $(".lightbox-container iframe").show().attr("src", videoLink);
    });

    $('.light-box-close').on("click", function () {
        $('.lighbox-overlay, .lightbox-container').fadeOut();
        $(".lightbox-container iframe").show().attr("src", '');
    });
});

/***** Resize Function *****/
$(window).resize(function () {
    menuToggle();
    updateSlider();
    mobileTestimonialSlier();
});

/***** Mobile Menu Toggle Function *****/
function menuToggle() {
    var winWidth = $(window).width();
    if (winWidth >= 991) {
        $('.nav__menu--mobile').show();
    } else {
        $('.nav__menu--mobile').hide();
    }
}

/***** Slick Mobile Testimonial *****/
function mobileTestimonialSlier() {
    if ($('section').hasClass('home__storiesSection')) {
        if ($(window).width() < 767) {
            $('.testimonialSliderNav:visible').not('.slick-initialized').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: false,
                infinite: false,
                swipe: true,
                asNavFor: '.testimonialSlider'
            });
        } else {
            if ($('.testimonialSliderNav:visible').hasClass('slick-initialized')) {
                $('.testimonialSliderNav:visible').slick("unslick");
            }
        }
    }
}

/***** Slick Resize Function *****/
function updateSlider() {
    var sliderUpdate = $('body').find('.setSliderPos.slick-initialized');
    sliderUpdate.slick('setPosition');
}