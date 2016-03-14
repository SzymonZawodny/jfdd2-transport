$(document).ready(function () {
    updateSectionsHeight();
    $(window).resize(function() {
        updateSectionsHeight();
    });
});

function updateSectionsHeight() {
    var windowHeight = window.innerHeight;
    $('.page').each(function(){
        $(this).css('height',windowHeight);
    });
    if (windowHeight/2 > 370){
        $('.half-page').each(function(){
          $(this).css('height',windowHeight/2);
        });}
    else {
        $('.half-page').each(function(){
            $(this).css('height',370);
        });
    }
}
