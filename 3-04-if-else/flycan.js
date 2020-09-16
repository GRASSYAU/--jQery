$(function () {
  let Photo = $("#bigPhoto");
  function changePic() {
    let who = $(this).attr("id");

    if (who === "small1") {
      Photo.attr("src", "images/fruit-1.jpg");
    } else if (who === "small2") {
      Photo.attr("src", "images/fruit-2.jpg");
    } else if (who === "small3") {
      Photo.attr("src", "images/fruit-3.jpg");
    } else if (who === "small4") {
      Photo.attr("src", "images/fruit-4.jpg");
    }
  }
  $("#small10, #small2, #small3, #small4").on("mouseover", changePic);
});
