$(".BOX a").click(function() {

	//在 body 底端加入一個 <div> 內含圖片語法；操作 HTML DOM
	//先在外部 CSS 把這個 <div> 設定為黑色的
    $("body").append("<div class='black'><img src='' width='900'></div>");
	
	//先把剛剛加入的黑色 <div> 隱藏起來
    $("div.black").hide();
	
	//抓取目前滑鼠按到的起連結所連結 href 內的資料(圖片的路徑)
    var PIC = $(this).attr("href");
	
	//把剛剛抓取的圖片的路徑設定到 黑色 <div> 內的圖片 src 路徑之內
    $("div.black img").attr("src", PIC);
	
	//讓黑色 <div> 透明淡出顯示出來
    $("div.black").fadeIn(800);
	
	//當滑鼠點選到 黑色 <div> 的時候，先透明淡出消失，然後把 黑色 <div> 自己移除掉
    $("div.black").click(function() {
        $(this).fadeOut(800, function() { $(this).remove() });
    });

    return false; //取消 HTML 標籤動作的預設值
	              //超連結就會失效，此時只會執行我們寫的 JQ 程式SSSS

})


