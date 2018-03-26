/* menu*/
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
    $('ul li a').click(function () {
        $('li a').removeClass("active");
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
});

/*slider*/
$(function () {
    $('.sl').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
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
});




