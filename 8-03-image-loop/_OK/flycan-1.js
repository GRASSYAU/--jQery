var bro = 0; //宣告變數 代表兄弟索引數從 0 開始

$("#box li").click(function() {
    
    $("#box li").fadeOut(); //先讓全部的 banner 圖片透明消失
  
    bro++; //讓 bro 變數遞加 1

    $("#box li").eq(bro).fadeIn(); //再讓下一個 banner 圖片出現

});


