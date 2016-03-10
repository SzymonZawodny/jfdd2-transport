$(document).ready(function(){
    $('.slide:gt(0)').hide();
});

setInterval(
    function(){
        $('.slide:first')
        .fadeOut(2000)
        .next()
        .fadeIn(2000)
        .end()
        .appendTo('.slogan');
    },
6000);
