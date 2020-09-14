//當有人拉動捲軸的時候 就會觸發事件做動作
	
$(window).scroll(function(){
		
	var NOW = $(window).scrollTop(); //抓取目前網頁捲軸的座標
		
	if( NOW>800 ){ 
		$("#ICON").stop(true,false).animate({ top : NOW+200}, 500, "easeOutBack");
	}else{
		$("#ICON").stop(true,false).animate({ top : -1000}, 500, "easeOutBack");
	}              
		
		// if 如果當捲軸大於 800px 的時候 DIV 就會滑下來出現
		// else 否則 DIV 就會滑上去消失

});
	

