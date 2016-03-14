$(document).ready(function () {
  $("#scrollButton").click(function () {
    console.log('clicked!');
    $('body').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });

  $(window).on('load scroll', function (event) {
    var height = $(window).scrollTop();
    if (height > 400) {
      $("#scrollButton").show(500);
    }
    else {
      $("#scrollButton").hide(500);
    }
  });
});