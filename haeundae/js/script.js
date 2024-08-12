$(document).ready(function () {
    $(function () {
        $('ul.gnb>li').hover(function () {
            $(this).find('.lnb').stop().slideToggle();
        });
    });
});