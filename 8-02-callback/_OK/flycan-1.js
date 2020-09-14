var WHO = 0; //代表一開始第一個兄弟序號是 0

$("#HEADER li").eq(0).find("a").css({ color: "#EEE" }); //一開始先把第一個超連結變白色

$("#HEADER li").mouseover(function() {

    WHO = $(this).index(); //兄弟的序號變成目前被滑鼠摸到的這一個

    var NOWPOS = $(this).position().left; //抓目前摸到的物件的座標

    $("#BB").stop(true, false).animate({ left: NOWPOS }, 800, "easeOutElastic",
        function() {
            $("#HEADER li").eq(WHO).find("a").css({ color: "#EEE" });
        });

    $("#HEADER li").find("a").css({ color: "#333" }); //全部的超連結變黑色

});

