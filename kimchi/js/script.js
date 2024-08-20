$(document).ready(function () {
    $(".sub-nav").hide();

    $(".main-nav>li").hover(function () {
        $(this).find(".sub-nav").stop().slideToggle();
    });

    function sliderImg() {
        $(".hero-in").animate({
            "left": "-100%"
        }, 300, function () {
            $(".hero-in img:eq(0)").clone().appendTo(".hero-in");
            $(".hero-in img:eq(0)").remove();
            $(".hero-in").css("left", 0);
        }
        );
    }

    setInterval(sliderImg, 3000);
});