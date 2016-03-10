var scrollTargets=['#contact-form','#main-functions','#slogan'];
var $scrollButtons=$('.nav-item');

//scroll to contact-form
$scrollButtons.eq(0).click(function(){
    $('body').animate({
        //offset to scroll below the navigation bar
        scrollTop: $(scrollTargets[0]).offset().top-70
    },2000);
});

$scrollButtons.eq(1).click(function(){
    $('body').animate({
        scrollTop: $(scrollTargets[1]).offset().top-70
    },2000);
});

$scrollButtons.eq(2).click(function(){
    $('body').animate({
        scrollTop: $(scrollTargets[2]).offset().top-70
    },2000);
});