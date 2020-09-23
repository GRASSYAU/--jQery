// $(".content").hover(
//   () => {
//     $(this).stop(true, false).animate({ top: -300 }, 900, "easeOutBack");
//   },
//   () => {
//     $(this).stop(true, false).animate({ top: 0 }, 900, "easeOutBounce");
//   }
// );

//不能使用用箭頭函數，this的關係

$(".content").hover(
  function () {
    $(this).stop(true, false).animate({ top: -300 }, 900, "easeOutBack");
  },
  function () {
    $(this).stop(true, false).animate({ top: 0 }, 900, "easeOutBounce");
  }
);
