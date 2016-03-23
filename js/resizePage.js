$(document).ready(function () {
    updateSectionsHeight();
    $(window).resize(function() {
        updateSectionsHeight();
    });
});

function updateSectionsHeight() {
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    $('.page').each(function(){
        $(this).css('height',windowHeight);
    });
    if (windowHeight/2 > 450){
        $('.half-page').each(function(){
          $(this).css('height',windowHeight/2);
        });}
    else {
        $('.half-page').each(function(){
            $(this).css('height',450);
        });
    }
    if (windowWidth<1000){
        $('#main-functions').css('height',windowHeight*2);
    }
    if(windowWidth<800){
        $('#main-functions').css('height',windowHeight*4);

    }
}
