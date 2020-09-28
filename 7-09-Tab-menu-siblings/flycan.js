// $("#tabMenu li").eq(0).find("a").addClass("nowTab");

// $("#tabMenu li").mouseover(function () {
//   $(".box").removeClass("open");
//   var now = $(this).index();
//   $(".box").eq(now).addClass("open");
//   $("#tabMenu li").find("a").removeClass("nowTab");
//   $("#tabMenu li").eq(now).find("a").addClass("nowTab");
// });

var btn = $("#tabMenu li");
var box = $(".box");
btn.eq(0).find("a").addClass("nowTab");

btn.mouseover(function () {
  box.removeClass("open");
  var now = $(this).index();
  box.eq(now).addClass("open");
  btn.find("a").removeClass("nowTab");
  btn.eq(now).find("a").addClass("nowTab");
});
