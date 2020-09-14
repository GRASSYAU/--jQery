$(".course").click(function() {
	
	$(this).siblings().find("div").css("display","none"); //其他課程的 div 關閉

	
	$(this).find("div").css("display","block"); //目前這個課程的 div 打開

});

