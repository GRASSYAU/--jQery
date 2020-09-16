$(function () {
  function changeDog1() {
    $(this).attr("src", "images/001.jpg");
  }

  function changeDog2() {
    $(this).attr("src", "images/002.jpg");
  }

  function changeDog3() {
    $(this).attr("src", "images/003.jpg");
  }

  let DOG = $("#myDog");

  DOG.on("mouseover", changeDog2);

  DOG.on("mouseout", changeDog1);

  DOG.on("click", changeDog3);
});
