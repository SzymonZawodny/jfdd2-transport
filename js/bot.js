$("body").mousemove(function(e) {
    isHuman= true
});
var isHuman= false;


$('form').submit(function () {
    if (!isHuman) {
        return false;
    }
});