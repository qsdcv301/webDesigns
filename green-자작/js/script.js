$(document).ready(function () {
    function slideShow() {
        $(".slideIn").animate({
            left: "-1200px"
        }, 2000, function () {
            $(".slideIn .slideBox:eq(0)").clone().appendTo(".slideIn");
            $(".slideIn .slideBox:eq(0)").remove();
            $(".slideIn").css({
                left: "0"
            });
        });
    }
    setInterval(slideShow, 3000);
});