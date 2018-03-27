$(function () {
    $(".menu>li").hover(function () {
        $(this).find("ul").stop().slideDown();
    }, function () {
        $(this).find("ul").stop().slideUp();
    });

    function slide() {
        var i = 0;
        i === 2 ? i = 0 : i++;
        $(".slide").animate({marginLeft: -i + "00%"}, 1000);
    }

    setInterval(slide, 3000);
});
