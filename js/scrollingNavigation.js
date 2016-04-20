var scrollTargets = ['#contact-button', '#main-functions', '#slogan'];
var $scrollButtons = $('.nav-item');

//scroll to contact-form
$scrollButtons.eq(0).click(function () {
  $('body').animate({
    //offset to scroll below the navigation bar
    scrollTop: $(scrollTargets[0]).offset().top - 110
  }, 2000);
  return false;
});
$scrollButtons.eq(1).click(function () {
  $('body').animate({
    scrollTop: $(scrollTargets[1]).offset().top - 50
  }, 2000);
  return false;
});
$scrollButtons.eq(2).click(function () {
  $('body').animate({
    scrollTop: $(scrollTargets[2]).offset().top - 50
  }, 2000);
  slideMainSlogan();
  return false;
});
