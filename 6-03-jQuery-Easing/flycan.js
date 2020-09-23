$("#right").click(() => {
  $("#boat").stop(true, false).animate({ left: "+=300" }, 1200, "easeInBack");
});

$("#left").click(() => {
  $("#boat").stop(true, false).animate({ left: "-=300" }, 1200, "easeInBack");
});

//駝峰式寫法要注意大小寫
