$(document).ready(function () {
    $(".sub-nav").hide();

    $(".main-nav>li").hover(function () {
        $(this).find(".sub-nav").stop().slideToggle();
    });

});