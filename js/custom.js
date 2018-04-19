$(function () {

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

    /* phone mask*/
    $("#phone").mask("8(999) 999-9999");

    /*waypoint*/
    $('.button-reserve').waypoint(function(direction) {

        if (direction ==='down') {
            $(".button-reserve").addClass('fix');
        }
        else {
            $(".button-reserve").removeClass('fix');
        }
    },{ offset: '0%' });
});

/*slider*/
$(function () {
    $('.sl').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        speed: 3000,
        fade: true,
        pauseOnDotsHover: true
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
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        speed: 3000,
        fade: true
    });
    $('.sl__rooms').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        speed: 3000,
        fade: true
    });
    $('.sl__standard').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true
    });
    $('.sl__entertainment').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false
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
                    asNavFor: '.sl__gallery2'
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
    $('.popup__link2').magnificPopup();
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
    features.forEach(function(feature) {
        var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
        });
        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<div id="bodyContent">'+
            '<p>м. Косів, вул. Над Гуком, 15.</p>'+
            '</div>'+
            '</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    });

}

/*animate*/
new WOW().init();

