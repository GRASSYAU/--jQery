$(function () {
  function changDog1() {
    $("#myDog").attr("src", "images/001.jpg");
  }
  function changDog2() {
    $("#myDog").attr("src", "images/002.jpg");
  }
  function changDog3() {
    $("#myDog").attr("src", "images/003.jpg");
  }
  $("#myDog").on("mouseover",changDog2);
  $("#myDog").on("mouseout", changDog1);
  $("#myDog").on("click", changDog3);
});
