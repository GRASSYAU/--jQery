$(window).scroll(function() {

    var NOW_POS = $(window).scrollTop();

    if (NOW_POS > 300) {
        $("#nav-out").css({ "position": "fixed", "top": 0 });
    } else {
        $("#nav-out").css({ "position": "static" });
    }

});