var bro = 0; //兄弟 從0開始
var pos = 0; //座標 從0開始
var myTimer; //要放計時器

var bannerWinth = 1000; //banner 圖片的寬度

//==設定計時器 讓 banner 自動做動畫=================

function slideBanner() {

    if (bro < 3) {
        bro++;
    } else {
        bro = 0;
    }

    pos = bro * bannerWinth * -1; //計算要做動畫移動的座標

    $("#banner ul").stop(true, false).animate({ left: pos }, 1000);
    $("#number li").removeClass("red").eq(bro).addClass("red");
}

myTimer = setInterval(slideBanner, 2000);

//==當滑鼠摸到 #banner 或 #number 時，動畫暫停=======

$("#banner, #number").hover(
    function() {
        clearInterval(myTimer);
    },
    function() {
        myTimer = setInterval(slideBanner, 2000);
    }
);

//==使用者點選下面的按鈕時 滑動指定的 banner 圖=======

$("#number li").click(function() {

    bro = $(this).index(); //抓取被滑鼠點到的按鈕的兄弟數字

    pos = bro * bannerWinth * -1; //計算要做動畫移動的座標

    $("#banner ul").stop(true, false).animate({ left: pos }, 1000);
    $("#number li").removeClass("red").eq(bro).addClass("red");
});