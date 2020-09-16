$(function () {
  let content = $("#content");
  function big() {
    content.css({
      "font-size": "30px",
      color: "red",
      "line-height": "1.5",
      "font-weight": "bolder",
    });
  }
  function mid() {
    content.css({ "font-size": "18px" });
  }
  function small() {
    content.css({ "font-size": "11px" });
  }
  $("#big").on("click", big);
  $("#mid").on("click", mid);
  $("#small").on("click", small);
});
