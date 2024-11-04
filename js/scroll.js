$(function(){
    $(window).scroll(function () {
        var offset = $(document).scrollTop()
        var opacity = 0;
        if (offset <= 0) {
            opacity = 0;
        } else if (offset > 0 & offset <= 200) {
            opacity = (offset - 1) / 200;
        }
        else {
            opacity = 1;
        }
        $('.black-background').css('opacity', opacity).html(opacity);
    });
});