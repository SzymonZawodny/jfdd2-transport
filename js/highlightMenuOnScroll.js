$(document).ready(function(){
    $(window).on('load scroll', function() {
        var positionY = $(window).scrollTop();
        var menuItem = $('.header .nav-item')
        if(positionY >= 0) {
            menuItem.eq(2)
                .addClass('nav-item-white');
        }
        else{
            menuItem.eq(2)
                .removeClass('nav-item-white');
        }
        if(positionY > windowHeight*0.9) {
            menuItem.eq(1)
                .addClass('nav-item-white');
            menuItem.eq(2)
                .removeClass('nav-item-white');
        }
        else{
            menuItem.eq(1)
                .removeClass('nav-item-white');
        }
        if(positionY + $(window).height() >= ($(document).height())-100) {
            menuItem.eq(0)
                .addClass('nav-item-white');
            menuItem.eq(1)
                .removeClass('nav-item-white');
        }
        else{
            $('.header .nav-item').eq(0)
                .removeClass('nav-item-white');
        }
    });
});
