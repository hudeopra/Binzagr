jQuery(document).ready(function ($) {

    var nav_offset_top = $("header").height() + 120;

    function navbarFixed() {
        if ($(".mt-header").length) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop(),
                    slowscroll = scroll / 2;
                if (scroll >= nav_offset_top) {
                    $(".mt-header").addClass("header_fixed");

                } else {
                    $(".mt-header").removeClass("header_fixed");
                    //   $('.billboard').css({
                    //  transform: "translateY(0)"
                    //  });
                }
            });
        }
    }

    navbarFixed();
    $(document).on('click', '.ham-menu', function () {
        $('.mt-header__wrapper').toggleClass('active');
        $('.ham-menu').addClass('active');
        $(' .mt-overlay').addClass('active');
        // $('.mt-header__menu ul').slideToggle();
    });



    $(document).on('click', '.mt-mini-cart-open ', function () {
        $('body').addClass('mt-mini-cart-active');
        $('.mt-mini-cart').addClass('active');
        $(' .mt-overlay').addClass('active');
    });
    $(document).on('click', '.mt-cart-close ', function () {
        $('body').removeClass('mt-mini-cart-active');
        $('.mt-mini-cart').removeClass('active');
        $('.mt-overlay').removeClass('active');
    });
    $(document).on('click', '.mt-overlay', function () {
        $('body').removeClass('mt-mini-cart-active');
        $('.mt-mini-cart').removeClass('active');
        $('.mt-overlay').removeClass('active');
        $('.ham-menu').removeClass('active');
    });
    $(document).on('click', '.mt-product-menu .mt-section-heading', function () {
        $('.mt-product-filter').slideToggle();
        $('.mt-product-menu .mt-section-heading').toggleClass('active');
    });

    $('.mt-billboard-slider').slick({
        dots: false,
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 400,
        infinite: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchThreshold: 100
    });

    $('.mt-product-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 2001,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.mt-brand-slider').slick({
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        arrows: false,
        slidesToShow: 7,
        slidesToScroll: 7,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // product detail
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        vertical: true,
    });

    // home banner
    setTimeout(function () {
        var get_height = $('video.same-height').height();
        $('img.same-height').css("height", get_height);
    }, 1000);
    $(window).resize(function () {
        var get_height = $('video.same-height').height();
        $('img.same-height').css("height", get_height);
    })

});

//toggle order summary
$(document).on('click', '.mt-aside__head ', function () {

    $('.mt-aside__body').slideToggle();

});
