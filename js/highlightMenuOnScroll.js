$(document).ready(function(){
    $(window).on('load scroll', function() {
        var positionY = $(window).scrollTop();
        if(positionY > 0) {
            $('.header .nav-item').eq(2)
                .addClass('nav-item-white');
        }
        else{
            $('.header .nav-item').eq(2)
                .removeClass('nav-item-white');
        }
        if(positionY > 700) {
            $('.header .nav-item').eq(1)
                .addClass('nav-item-white');
            $('.header .nav-item').eq(2)
                .removeClass('nav-item-white');
        }
        else{
            $('.header .nav-item').eq(1)
                .removeClass('nav-item-white');
        }
        if(positionY > 2650) {
            $('.header .nav-item').eq(0)
                .addClass('.nav-item-white');
            $('.header .nav-item').eq(1)
                .removeClass('nav-item-white');
        }
        else{
            $('.header .nav-item').eq(0)
                .removeClass('nav-item-white');
        }
    });
});
