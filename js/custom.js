$(function () {
    /*button contact*/
    $('.button__addres').click(function () {
        $('.contacts__addres').toggle();
    });
    /*preloader*/
    setTimeout(function () {
        if (!$('.preloader').hasClass('done')) {
            $('.preloader').addClass('done');
        }
    }, 2000)


    /*placeholder*/
    $('input').each(function () {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function () {
            $(this).attr('placeholder', '');
        });
        $(this).focusout(function () {
            $(this).attr('placeholder', placeholder);
        });
    });

    /*active*/
    $('.menu__link').click(function () {
        $('li .menu__link').removeClass("active");
        $(this).addClass("active");
    });
    $('.advantages__svg').click(function () {
        $('li .nav-link .advantages__svg').removeClass("active");
        $(this).addClass("active");
    });
    $('.nav_item_a').click(function () {
        $('li .nav-link .advantages__svg').removeClass("active");
        $(this).addClass("active");
    });

    /* hamburger*/
    $('.icon').click(function () {
        /*$('.icon').toggleClass('active');*/
        $('.menu').slideToggle(300);
    });
    $("ul .menu__item_toggle").click(function () {
        $('.panel').slideToggle(800);
    });

    $(window).bind("resize", function () {
        if ($(window).width() < 991) {
            $(".menu__item:eq(2)").removeClass("menu__item_hover");
        } else {
            $(".menu__item:eq(2)").addClass("menu__item_hover");
        }
    }).resize();


    /*tab*/

    $(window).bind("resize", function () {
        if ($(window).width() < 575) {
            $('.my__tab').removeClass('tab-content');
        }
        else {
            $('.my__tab').addClass('tab-content');
        }
    }).resize();


    /*data*/
    $("#datepicker").datepicker({
        showOn: "button",
        buttonImage: "img/calendar.svg",
        buttonImageOnly: true,
        buttonText: "Select date"
    });
    $("#datepicker2").datepicker({
        showOn: "button",
        buttonImage: "img/calendar.svg",
        buttonImageOnly: true,
        buttonText: "Select date"
    });
    $("#datepicker_up").datepicker({
        showOn: "button",
        buttonImage: "img/calendar.svg",
        buttonImageOnly: true,
        buttonText: "Select date"
    });
    $("#datepicker2_up").datepicker({
        showOn: "button",
        buttonImage: "img/calendar.svg",
        buttonImageOnly: true,
        buttonText: "Select date"
    });

    /* phone mask*/
    $("#phone").mask("8(999) 999-9999");
    $("#phone_up").mask("8(999) 999-9999");

    /*waypoint*/
    $('.button-reserve').waypoint(function (direction) {

        if (direction === 'down') {
            $(".button-reserve").addClass('fix');
            $(".header__bottom").addClass('hide');
        }
        else {
            $(".button-reserve").removeClass('fix');
            $(".header__bottom").removeClass('hide');
        }
    }, {offset: '-30%'});
});

/*slider*/
$(function () {
    $('.sl').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        speed: 300,
        fade: false,
        pauseOnDotsHover: true,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }).on("afterChange", function (e, slick) {
        if (slick.currentSlide === 0) {
            $('.sl').slick("setOption", "autoplaySpeed", 2000);
        } else if (slick.currentSlide === 1) {
            $('.sl').slick("setOption", "autoplaySpeed", 3000);
        } else {
            $('.sl').slick("setOption", "autoplaySpeed", 4000);
        }
    });
    $('.sl__about').slick({
        autoplay: true,
        autoplaySpeed: 300,
        dots: false,
        arrows: false,
        speed: 3000,
        fade: false
    });
    $('.sl__rooms').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        speed: 300,
        fade: false
    });

    $('.sl__standard').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
        ]
    });
    $('.sl__entertainment').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    /*popup*/
    $('.popup__link').magnificPopup({
        callbacks: {
            open: function () {
                $('.sl__gallery').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    fade: false,
                    asNavFor: '.sl__gallery2',
                    responsive: [
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                arrows: false
                            }
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                arrows: false
                            }
                        },
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                arrows: false
                            }
                        }
                    ]
                });
                $('.sl__gallery2').slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    asNavFor: '.sl__gallery',
                    dots: false,
                    arrows: false,
                    fade: false,
                    focusOnSelect: true
                });
            }
        }
    });

    $('.open_popup_form').click(function () {
        $('.popup_form').css({'top': $(window).scrollTop() + 20}).fadeIn();
        $('.bg_popup').fadeIn();

        $('.bg_popup').click(function () {
            $('.popup_form').fadeOut();
            $('.bg_popup').fadeOut();
        });
    });
    $(window).scroll(function () {
        $('.popup_form').css({'top': $(window).scrollTop() + 20});
    }).scroll();

});


/*maps*/

function initMap() {
    var location = {lat: 48.311433, lng: 25.074230};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: location,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        scrollwheel: false,
        streetViewControl: false,
        scaleControl: false,
        tilesloaded: false,
        mapTypeControl: false,
        fullscreenControl: false
    });
    var iconBase = 'img/';
    var icons = {
        marker: {
            icon: iconBase + 'm.png'
        }
    };
    var features = [
        {
            position: new google.maps.LatLng(48.311357, 25.076575),
            type: 'marker'
        }
    ];
    features.forEach(function (feature) {
        var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
        });
        var contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<div id="bodyContent">' +
            '<p>м. Косів, вул. Над Гуком, 15.</p>' +
            '</div>' +
            '</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    });

}

/*animate*/
new WOW().init();


