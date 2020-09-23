$(window).scroll(() => {
  var now = $(window).scrollTop();
  $("#ICON")
    .stop(true, false)
    .animate({ top: now + 200 }),
    500;
});
