var bro = 0; //兄弟 從0開始
var pos = 0; //座標 從0開始
var myTimer; //要放計時器
var bannerWinth = 1000; //banner 圖片的寬度

//先把第一個 <li> banner 複製放入 newFirst 變數之內
var newFirst = $("#banner ul li").eq(0).clone();

//再把複製的 <li> banner 放到 <ul> 裡面的最後面 
$("#banner ul").append(newFirst);


//==設定計時器 讓 banner 自動做動畫=================

function slideBanner() {

    //因為原本有 4 個 banner 兄弟索引數是到 3 
    //後來多複製了一個 banner 兄弟索引數變成 4
    //所以當 bro 等於 3 的時候 再給他加 1 一次
    //動畫就會移動到就多複製的那一個 banner
    if (bro <= 3) {
        bro++;
    }

    pos = bro * bannerWinth * -1; //計算要做動畫移動的座標

    $("#banner ul").stop(true, false).animate({ left: pos }, 1000, function() {
        if (bro > 3) { //當兄弟索引數是大於 3 之後
           
		    bro = 0; //就把兄弟索引數設定回到 0
			
			//同時把 banner 以靜態的方式移回第一張
            $("#banner ul").css({ "left": "0" }); 
        }
    });

    if (bro > 3) { //當兄弟索引數是大於 3 之後
	
	    //就讓第一個圈圈變紅色
        $("#number li").removeClass("red").eq(0).addClass("red");
		 
    } else { 
	
	    //否則圈圈依原來的兄弟索引數做變化
        $("#number li").removeClass("red").eq(bro).addClass("red");
    }

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


