// $(".small img").click(function (e) {
//   var now = $(this).index();
//   $(".banner img").eq(now).fadeIn(300).siblings().fadeOut(300);
// });

$(".small img").click(function (e) {
  var now = $(this).index();
  $(".banner img").fadeOut(800).eq(now).fadeIn(800);
});
