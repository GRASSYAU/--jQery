var bro = 0; //宣告變數 代表兄弟索引數從 0 開始

var myTimer; //宣告一個空的變數 等一下要放計時器

function gogoBanner() {

    $("#box li").fadeOut(); //先讓全部的 banner 圖片透明消失

    if (bro < 5) { //如果當 bro 兄弟的數字小於 5 的時候
        bro++ ;      //就讓 bro 數字遞加 1
    } else {       //否則（當兄弟的數字大於 5 時）
        bro = 0 ;   //就讓 bro 數字變回 0 回到第一張圖片
    }

   
    $("#box li").eq(bro).fadeIn(); //再讓下一個 banner 圖片出現

}

//先把 setInterval() 計時器放到 myTimer 變數之內
//當把計時器放到變數之內後 就可以做進一步的控制
myTimer = setInterval(gogoBanner, 1000);

$("#box").hover(
    function() {
        //當被滑鼠摸到時 就清除 myTimer 變數內的計時器
        clearInterval(myTimer);
    },
    function() {
        //當滑鼠離開時 就把計時器放回到 myTimer 變數之內
        myTimer = setInterval(gogoBanner, 1000);
    }
);

