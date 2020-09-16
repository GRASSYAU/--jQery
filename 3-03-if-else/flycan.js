$(function () {
  let Photo = $("#bigPhoto");
  function changePic() {
    let who = $(this).attr("id");

    if (who == "small1") {
      Photo.attr("src", "images/fruit-1.jpg");
    }
    if (who == "small2") {
      Photo.attr("src", "images/fruit-2.jpg");
    }
    if (who == "small3") {
      Photo.attr("src", "images/fruit-3.jpg");
    }
    if (who == "small4") {
      Photo.attr("src", "images/fruit-4.jpg");
    }
  }
  $("#small1").on("mouseover", changePic);
  $("#small2").on("mouseover", changePic);
  $("#small3").on("mouseover", changePic);
  $("#small4").on("mouseover", changePic);
});
