var content = $("#content");

$("#big").click(() => {
  content.css({
    "font-size": "30px",
    color: "red",
    "line-height": "1.5",
    "font-weight": "bolder",
  });
});
$("#mid").click(() => {
  content.css({
    "font-size": "20px",
    color: "pink",
    "line-height": "1.5",
    "font-weight": "bolder",
  });
});
$("#small").click(() => {
  content.css({
    "font-size": "12px",
    color: "yellow",
    "line-height": "1.5",
    "font-weight": "bolder",
  });
});
