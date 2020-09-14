$(".small img").click( function(){
		
	var N = $(this).index(); 
		
	$(".banner img").eq(N).fadeIn(800).siblings().fadeOut(800);
	
});

