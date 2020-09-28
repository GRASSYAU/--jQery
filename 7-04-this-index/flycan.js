$(".small img").click(function (e) {
  $(".banner img").fadeOut(800);
  var now = $(this).index();
  $(".banner img").eq(now).fadeIn(800);
});
