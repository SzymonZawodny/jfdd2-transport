$(document).ready(function(){
    $(window).on('load scroll', function() {
        var positionY = $(window).scrollTop();
        if(positionY > 400) {
            $('.header, .nav-item')
                .css({'border-bottom-color': '#FFF'
                     ,'border-top-color':'#FFF'});
        }
    });
});
