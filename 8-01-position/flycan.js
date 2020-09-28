var header_li = $("#HEADER li");

header_li.eq(0).find("a").css({ color: "#fff" });

header_li.mouseover(function () {
  var nowpos = $(this).position().left;
  $("#BB").stop(true, false).animate({ left: nowpos });
  header_li.find("a").css({ color: "#000" });
  $(this).find("a").css({ color: "#fff" });
});
