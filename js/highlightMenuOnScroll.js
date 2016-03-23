$(document).ready(function(){
    $(window).on('load scroll', function() {
        var positionY = $(window).scrollTop();
        var menuItem = $('.header .nav-item')
        if(positionY===0){
            $('.header').css({'height':'70px'});
            $('.logo').css({'transform':'scale(1)', 'top':'10px'});
            $('.nav-item').css({'transform':'scale(1)', 'margin-top':'5px', 'margin-left':'0px'});
            $('#contact-menu').css({'left':'0px'});

        }
        if(positionY > 0) {
            menuItem.eq(2)
                .addClass('nav-item-white');
            $('.header').css({'height':'50px'});
            $('.logo').css({'transform':'scale(0.8)', 'top':'0px'});
            $('.nav-item').css({'transform':'scale(0.75)', 'margin-top':'-6px', 'margin-left':'-48px'});
            $('#contact-menu').css({'left':'10px'});
        }
        else{
            menuItem.eq(2)
                .removeClass('nav-item-white');
        }
        if(positionY > windowHeight*0.8) {
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
