$("#right").click(function() {
    $("#boat").stop(true,false).animate({ left: "+=300" }, 1200, "easeOutElastic");
});

$("#left").click(function() {
    $("#boat").stop(true,false).animate({ left: "-=300" }, 1200, "easeOutBounce");
});

