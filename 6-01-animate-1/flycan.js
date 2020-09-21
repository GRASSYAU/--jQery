$("#right").click(() => {
  $("#boat").animate({ left: "1500" }, 500);
});

$("#left").click(() => {
  $("#boat").animate({ left: "0" }, 500);
});
