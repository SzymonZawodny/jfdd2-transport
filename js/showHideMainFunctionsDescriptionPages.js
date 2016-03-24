$(document).ready(function(){
  $('.function-description-page').addClass('invisible');
});

$('.main-functions-images').eq(0).click(function(){
  $('.function-description-page').eq(0).removeClass('invisible');
});

$('.function-description-page').click(function() {
  $('.function-description-page').addClass('invisible');
});