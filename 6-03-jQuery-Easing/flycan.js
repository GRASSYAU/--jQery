$("#right").click(() => {
  $("#boat").stop(true, false).animate({ left: "+=200" }, 500, "easelnBack");
});

$("#left").click(() => {
  $("#boat").stop(true, false).animate({ left: "-=200" }, 500, "easelnBack");
});
