//一開始先把第一個超連結變白色
$("#HEADER li").eq(0).find("a").css({ "color" : "#EEE" });

$("#HEADER li").mouseover(function() {

    //抓取目前被滑鼠摸到的按鈕的座標
    var nowPos = $(this).position().left;

    //藍色方塊做動畫
    $("#BB").stop(true, false).animate({ "left" : nowPos }, 800, "easeOutElastic");

    //全部的超連結變黑色
    $("#HEADER li").find("a").css({ "color" : "#333" });

    //目前被滑鼠摸到的這一個超連結變白色
    $(this).find("a").css({ "color" : "#EEE" });

});

