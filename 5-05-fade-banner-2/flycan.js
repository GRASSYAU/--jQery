$("#small1").click(() => {
  $("#big1").fadeIn(800);
  $("#big2, #big3, #big4, #big5, #big6").fadeOut(800);
});

$("#small2").click(() => {
  $("#big2").fadeIn(800);
  $("#big1, #big3, #big4, #big5, #big6").fadeOut(800);
});
$("#small3").click(() => {
  $("#big3").fadeIn(800);
  $("#big1, #big2, #big4, #big5, #big6").fadeOut(800);
});
$("#small4").click(() => {
  $("#big4").fadeIn(800);
  $("#big1, #big2, #big3, #big5, #big6").fadeOut(800);
});
$("#small5").click(() => {
  $("#big5").fadeIn(800);
  $("#big1, #big2, #big3, #big4, #big6").fadeOut(800);
});

$("#small6").click(() => {
  $("#big6").fadeIn(800);
  $("#big1, #big2, #big3, #big4, #big5").fadeOut(800);
});
