//一般收闔

// $(".course").click(function (e) {
//   e.preventDefault();
//   $(this).siblings().find("div").css({ display: "none" });
//   $(this).find("div").css({ display: "block" });
// });

//手風琴效果
$(".course").click(function (e) {
  e.preventDefault();
  $(this).siblings().find("div").slideUp();
  $(this).find("div").slideDown();
});
