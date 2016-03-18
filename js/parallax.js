//var scrollFromTop = 0;
//var imagePosition = 0;

$(document).ready(function () {
  $(document).scroll(function (event) {
    var image = $(".productDescription")[0];
    var imageOffsetTop = image.offsetTop;
    var offsetTop = $(document).scrollTop();

    var offsetDelta = imageOffsetTop - offsetTop;
    var deltaPosition = offsetDelta*0.4;



    $(".productDescription").css("background-position", 'center ' + deltaPosition + 'px');


  })


});