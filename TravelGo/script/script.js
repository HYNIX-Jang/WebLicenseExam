$(function () {
    var i = 0;

    function slide() {
        i === 2 ? i = 0 : i++;
        $(".slide").animate({marginLeft: -i + "00%"}, 1000);
    }

    setInterval(slide, 3000);
});