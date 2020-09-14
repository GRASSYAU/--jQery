$(".small img").click( function(){
		
	$(".banner img").fadeOut(800); //先讓全部的 banner 中的圖片變透明消失

	var N = $(this).index(); //截取出目前物件在同一層兄弟中的「排行」數字
		
	$(".banner img").eq(N).fadeIn(800); //讓 banner 中被指定到的圖片出現
	
});
	


