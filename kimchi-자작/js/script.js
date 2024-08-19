$(document).ready(function () {
    $('.gnb>li').hover(function () {
        $(this).find('.lnb').stop().slideToggle();
    });

    function slideShow() {
        $(".slide-box").animate({
            left: "-400px"
        }, 500, function () {
            $(".slide-box img:eq(0)").clone().appendTo(".slide-box");
            $(".slide-box img:eq(0)").remove();
            $(".slide-box").css({
                left: "0"
            });
        });
    }

    $(".pop").click(function (e) {
        e.preventDefault();
        $(".popup").fadeIn();
    });

    $(".close").click(function (e) {
        e.preventDefault();
        $(".popup").fadeOut();
    });

    setInterval(slideShow, 2500);
});

