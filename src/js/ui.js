$(document).ready(function () {    
    $('.header__menuMobile').on("click", function () {
        //$('.nav__menu').toggleClass('active');
        /*if(winWidth<=991){
            $('.nav__menu--mobile').slideToggle();
        }*/
        $('.nav__menu').slideToggle();
    });
    menuToggle();
    /*$('.headerBanner').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $(window).on('scroll', function () {
        var winScroll = $(window).scrollTop();
        var headerTop = $(".header__top").outerHeight();
        //var headerHeight = $(".header").outerHeight();
        if (winScroll > 10) {
            $(".header").addClass("header__fixed");
            $(".banner").addClass("banner--marginTop");
        } else {
            $(".header").removeClass("header__fixed");
            $(".banner").removeClass("banner--marginTop");
        }
    });*/
});
$(window).resize(function(){
    menuToggle();
})
function menuToggle(){
    var winWidth = $(window).width();
    if(winWidth>=991){
        $('.nav__menu--mobile').show();
    }else{
        $('.nav__menu--mobile').hide();
    }
}