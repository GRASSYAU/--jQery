$("#right").click(function() {
    $("#boat").stop(true,false).animate({ left: "+=300" }, 1200);
});

$("#left").click(function() {
    $("#boat").stop(true,false).animate({ left: "-=300" }, 1200);
});

