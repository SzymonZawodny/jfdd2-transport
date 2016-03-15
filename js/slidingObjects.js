$(document).ready(function () {
  slideMainSlogan();
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

//main-functions animation
var notAnimated = true;
$(window).scroll(function () {
  slidingDoorMainFunctions();
});

function slidingDoorMainFunctions(){
  var mainFunctionsElements = $('.function');
  if ($(window).scrollTop() > 120) {
    if (notAnimated) {
      mainFunctionsElements.eq(0).animate({
        left: "+=25%"
      }, 1500);
      mainFunctionsElements.eq(1).animate({
        left: "+=50%"
      }, 3000);
      mainFunctionsElements.eq(2).animate({
        left: "-=50.1%"
      }, 3000);
      mainFunctionsElements.eq(3).animate({
        left: "-=25.1%"
      }, 1500);
      notAnimated = false;
    }
  }
}