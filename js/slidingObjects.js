$(document).ready(function () {

    var initialMargin = 400;
    var finalMargin = 200;
    var speed = 10;
    var deltaMargin = 0;

    var intervalMainText = setInterval(function () {
        $('.slogan-main').css('margin-top', '-=1px');
        deltaMargin++;
        if (deltaMargin === initialMargin - finalMargin) {
            clearInterval(intervalMainText);
        }
    }, speed);
});