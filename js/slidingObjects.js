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