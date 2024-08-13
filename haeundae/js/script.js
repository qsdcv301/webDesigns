$(document).ready(function () {
    $('ul.gnb>li').hover(function () {
        $(this).find('.lnb').stop().slideToggle();
    });

    $(".tab-nav>a").click(function (e) {
        e.preventDefault();
        $(".tab-nav>a").removeClass("active");
        $(".tab-content>div").removeClass("act");
        $(this).addClass("active");
        const act = $(this).data("act");
        $(act).addClass("act");
    });

    $(".pop").click(function (e) {
        e.preventDefault();
        $(".popup").fadeIn();
    });

    $(".close").click(function (e) {
        e.preventDefault();
        $(".popup").fadeOut();
    });

    setInterval(fadeInout, 3000);
});

function fadeInout() {
    $(".hero img:eq(0)").fadeOut(500).next().fadeIn(500).end().appendTo(".hero");
}