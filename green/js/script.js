$(document).ready(function () {
    $(".main-nav").hover(function () {
        $(".sub-nav").stop().fadeToggle();
    });
    function slideShow() {
        $(".heroin").animate({
            left: "-1200px"
        }, 500, function () {
            $(".heroin img:eq(0)").clone().appendTo(".heroin");
            $(".heroin img:eq(0)").remove();
            $(".heroin").css({
                left: "0"
            });
        });
    }
    setInterval(slideShow, 2500);

    $(".popup").click(function (e) { 
        e.preventDefault();
        $(".notice-popup").fadeIn(500);
    });

    $(".close").click(function (e) { 
        e.preventDefault();
        $(".notice-popup").fadeOut(500);
    });

    $(".family-select").change(function (e) { 
        e.preventDefault();
        const values = $(this).val();
        if(values == "#"){
            alert("사이트 이름을 선택하세요.");
        }else{
            window.open("about:blank").location.href = values;
        }
    });
});