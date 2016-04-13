var windowHeight = $(window).innerHeight();
$(document).ready(function () {
  if (windowHeight / 2 > 450) {
    $('.contact-form').addClass('invisible').css({top: -innerHeight * 0.5});
    slideMainSlogan();
  }
  else {
    $('.contact-form').addClass('invisible').css({top: '-460px'});
    slideMainSlogan();
  }
});

function slideMainSlogan() {
  var initialMargin = 400;
  var finalMargin = 300;
  var speed = 10;
  var deltaMargin = 0;
  //initial position (margin-top)
  $('.main-slogan').css({'margin-top': '50px', 'opacity': '0'});
  //sliding up until deltaMargin=0
  var intervalMainTextSlide = setInterval(function () {
    $('.main-slogan').css({'margin-top': '-=1px', 'opacity': '+=0.01'});
    deltaMargin++;
    if (deltaMargin === initialMargin - finalMargin) {
      //stops interval when deltaMargin = 0
      clearInterval(intervalMainTextSlide);
    }
  }, speed);
}

//other-functions animation
var notAnimated = true;
var otherFunctionsElements = $('.other-func-item');

$(window).scroll(function () {
  slidingInOtherFunctions();
});

function slidingInOtherFunctions() {
  if ($(window).scrollTop() > windowHeight * 1.3) {
    if (notAnimated) {
      otherFunctionsElements.eq(0)
        .addClass('first-column');
      otherFunctionsElements.eq(1).delay(400)
        .queue(function(next){
          $(this).addClass('second-column');
          next();});
      otherFunctionsElements.eq(2).delay(800)
        .queue(function(next){
          $(this).addClass('third-column');
          next();});
      otherFunctionsElements.eq(3).delay(1200)
        .queue(function(next){
          $(this).addClass('first-column');
          next();});
      otherFunctionsElements.eq(4).delay(1600)
        .queue(function(next){
          $(this).addClass('second-column');
          next();});
      otherFunctionsElements.eq(5).delay(2000)
        .queue(function(next){
          $(this).addClass('third-column');
          next();});
      notAnimated = false;
    }
  }
}
var contactFormPosition = 0;
$('.contact-button').click(function() {
    if(contactFormPosition===0){
        $('.contact-form').toggleClass('invisible')
            .delay(200)
            .animate({top: '0px'}, 2000);
        setTimeout(function(){
            $('.contact-form').css({'z-index':'0'});
            $('.button-text.button.contact-button label').eq(0).addClass('invisible');
            $('.button-text.button.contact-button label').eq(1).removeClass('invisible');
        },2000);
        contactFormPosition=1;
        $('body').animate({
            scrollTop: $('#contact-button').offset().top
        }, 2000);
    }
    else{
        $('.contact-form')
            .delay(200)
            .css({'z-index':-1})
            .animate({top:-windowHeight/2},2000);
        setTimeout(function(){
          $('.contact-form').toggleClass('invisible');
          $('.button-text.button.contact-button label').eq(0).removeClass('invisible');
          $('.button-text.button.contact-button label').eq(1).addClass('invisible');
        },2500);
        contactFormPosition=0;
        $('body').animate({
            scrollTop: $('#about-us').offset().top-windowHeight/2+72
        }, 2500);
    }


});

