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
  //slidingContactForm();
});

function slidingInOtherFunctions() {
  if ($(window).scrollTop() > windowHeight * 1.3) {
    if (notAnimated) {
      otherFunctionsElements.eq(0)
        .animate({left: "20%"}, 1500);
      otherFunctionsElements.eq(1).delay(400)
        .animate({left: "45%"}, 1500);
      otherFunctionsElements.eq(2).delay(800)
        .animate({left: "70%"}, 1500);
      otherFunctionsElements.eq(3).delay(1200)
        .animate({left: "20%"}, 1500);
      otherFunctionsElements.eq(4).delay(1600)
        .animate({left: "45%"}, 1500);
      otherFunctionsElements.eq(5).delay(2000)
        .animate({left: "70%"}, 1500);
      notAnimated = false;
    }
  }
}

$('.contact-button').click(function() {
  $('.contact-form').toggleClass('invisible')
    .delay(200)
    .animate({top: '0px'}, 2000);

  $('body').animate({

    scrollTop: $('#contact-button').offset().top + 300
  }, 2000);

});

