$(function() {
  var divToCollapse = $('#js-sticky-wrap');
  collapseDiv(divToCollapse);
});


function collapseDiv(el) {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 161) {
      el.stop().animate({
        height: 50
      }, 10, "linear");
    } else {
      el.stop().animate({
        height: 100
      }, 70, "linear");
    }
  });
}
