console.log('hello out there!');
$(function() {
  var divToCollapse = $('#js-sticky-wrap');
  stickyDiv(divToCollapse);
});


function stickyDiv(el) {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 161) {
      el.stop().animate({
        height: 50
      }, 10, "linear");
    } else {
      el.stop().animate({
        height: 100
      }, 30, "linear");
    }
  });
}
