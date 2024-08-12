$(document).ready(function () {

    $(".main-nav>li").hover(function (e) {
        e.preventDefault();
        $(this).find(".sub-nav").stop(true, true).slideDown();
    }, function () {
        $(this).find(".sub-nav").stop(true, true).slideUp();
    }
    );

    let currentIndex = 1;
    function slideShow() {
        const slideImages = document.querySelectorAll(".slide img");
        slideImages.forEach((img, index) => {
            $(img).fadeOut(1000);
        });

        $(slideImages[currentIndex]).fadeIn(1000);

        currentIndex = (currentIndex + 1) % slideImages.length;
    }

    $(".popup").click(function (e) {
        e.preventDefault();
        $(".notice-popup").fadeIn(500);
    });

    $(".close").click(function (e) {
        e.preventDefault();
        $(".notice-popup").fadeOut(500);
    });

    $(".notice-gallery h1").click(function (e) {
        e.preventDefault();
        var index = $(this).index();
        $(".notice-gallery h1").removeClass("active");
        $(this).addClass("active")
        if (index === 0) {
            $(".notice").show();
            $(".gallery").hide();
        } else {
            $(".notice").hide();
            $(".gallery").show();
        }
    });



    setInterval(slideShow, 2500);
});