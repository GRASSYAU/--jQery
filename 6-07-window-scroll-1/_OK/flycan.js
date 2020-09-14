$(window).scroll(function(){

	var NOW = $(window).scrollTop(); //抓取目前捲軸的所在座標

	$("#ICON").stop(true,false).animate({top:NOW+200},1500,"easeOutBack");

});


