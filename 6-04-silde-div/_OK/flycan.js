$(".content").hover(function(){
		
	$(this).stop(true,false).animate({top:-300},900,"easeOutBack");
		
},function(){
		
	$(this).stop(true,false).animate({top:0},900,"easeOutBounce");
		
});	


