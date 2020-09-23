// $(".QQ").click(function () {
//   $(this).siblings().css({ "background-Color": "#000" }); //同一層
//   $(this).parent().css({ "background-Color": "#000" }); //上一層
// });

// $(".QQ").click(function () {
//   $(this).siblings().eq(3).css({ "background-Color": "#000" }); //eq(陣列數字)
// });

// $(".QQ").click(function () {
//   $(this).siblings().filter(":first-child").css({ "background-Color": "#000" });
// });//篩選出.QQ的第一個DOM

// $(".QQ").click(function () {
//   $(this).parent().siblings().eq(0).css({ "background-Color": "#000" });
// }); //父層的同一層

$(".QQ").click(function () {
  $(this)
    .parent()
    .siblings()
    .eq(0)
    .siblings()
    .eq(2)
    .children()
    .eq(0)
    .css({ "background-Color": "#000" });
});
