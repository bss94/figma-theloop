$(document).ready(function(){
    $(".teams").owlCarousel({
                items: 1,
                loop: true,

    });
});
$('.burger-menu').on('click', function (e) {
    e.preventDefault();
    $('.burger-menu').toggleClass('burger-open');
    $('.menu').toggleClass('menu-show');
});
