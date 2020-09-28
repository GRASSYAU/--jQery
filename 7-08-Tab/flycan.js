$("#tabMenu li").mouseover(function () {
  $(".box").removeClass("open");
  var now = $(this).index();
  $(".box").eq(now).addClass("open");
});
