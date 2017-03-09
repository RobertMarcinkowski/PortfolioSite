$(window).on('load', function () {
    $('.preloader').addClass('invisible');
    $('.main-effect').addClass('visible');
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop() + 600;
    $('.block').each(function () {
        var element = $(this).offset().top;
        if (scroll > element) {
            $(this).addClass('visible');
        }
    });
    var top = $(document).scrollTop();
    $('#main').css({
        'background-position': 'center ' + (top / 2).toFixed(2) + 'px'
    });
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        items: 1
    });
});