$("#right").click(function() {
    $("#boat").stop(true,false).animate({ left: "+=300" }, 500);
});

$("#left").click(function() {
    $("#boat").stop(true,false).animate({ left: "-=300" }, 500);
});

