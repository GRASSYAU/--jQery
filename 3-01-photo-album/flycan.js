$(function () {
  let Photo = $("#bigPhoto");
  function changePic_1() {
    Photo.attr("src", "images/fruit-1.jpg");
  }
  function changePic_2() {
    Photo.attr("src", "images/fruit-2.jpg");
  }
  function changePic_3() {
    Photo.attr("src", "images/fruit-3.jpg");
  }
  function changePic_4() {
    Photo.attr("src", "images/fruit-4.jpg");
  }

  $("#small1").on("mouseover", changePic_1);
  $("#small2").on("mouseover", changePic_2);
  $("#small3").on("mouseover", changePic_3);
  $("#small4").on("mouseover", changePic_4);
});
