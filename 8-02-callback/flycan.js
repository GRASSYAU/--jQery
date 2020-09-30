//使用普通function

// var WHO = 0;
// var header_li = $("#HEADER li");

// header_li.eq(0).find("a").css({ color: "#fff" });

// header_li.mouseover(function () {
//   WHO = $(this).index();
//   var nowpos = $(this).position().left;
//   $("#BB").stop(true, false).animate({ left: nowpos }, 300, doafter);
//   header_li.find("a").css({ color: "#000" });
// });

// function doafter() {
//   header_li.eq(WHO).find("a").css({ color: "#fff" });
// }

//callback 使用暱名
let WHO = 0;
let header_li = $("#HEADER li");

header_li.eq(0).find("a").css({ color: "#fff" });

header_li.mouseover(function () {
  WHO = $(this).index();
  var nowpos = $(this).position().left;
  $("#BB")
    .stop(true, false)
    .animate({ left: nowpos }, 300, function () {
      header_li.eq(WHO).find("a").css({ color: "#fff" });
    });
  header_li.find("a").css({ color: "#000" });
});
