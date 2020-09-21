$("#right").click(() => {
  $("#boat").stop(true, false).animate({ left: "+=200" }, 500);
});

$("#left").click(() => {
  $("#boat").stop(true, false).animate({ left: "-=200" }, 500);
});
