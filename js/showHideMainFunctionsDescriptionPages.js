$(document).ready(function(){
  $('.function-description-page').addClass('invisible');
});

var $functionImages = $('.main-functions-images');

$functionImages.eq(0).click(function(){
  $('.function-description-page').eq(0).removeClass('invisible');
});

$functionImages.eq(1).click(function(){
  $('.function-description-page').eq(1).removeClass('invisible');
});

$functionImages.eq(2).click(function(){
  $('.function-description-page').eq(2).removeClass('invisible');
});

$functionImages.eq(3).click(function(){
  $('.function-description-page').eq(3).removeClass('invisible');
});

$('.function-description-page-cross').click(function() {
  $('.function-description-page').addClass('invisible');
});

