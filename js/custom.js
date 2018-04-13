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
    //$('.header__bottom').waypoint(function(direction) {

     //   if (direction ==='down') {
     //       $(".header__bottom").addClass('fix');
     //   }
      //  else {
      //      $(".header__bottom").removeClass('fix');
     //   }
   // },{ offset: '0%' });
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
});




