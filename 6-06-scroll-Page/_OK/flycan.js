$("#B00").click(function(){
	var pos = $("#AAA").position().top;
	$("html,body").stop(true,false).animate({scrollTop:pos},800, "easeOutBack");
});
	
$("#B01").click(function(){
	var pos = $("#BBB").position().top;
	$("html,body").stop(true,false).animate({scrollTop:pos},800, "easeOutBack");
});
	
$("#B02").click(function(){
	var pos = $("#CCC").position().top;
	$("html,body").stop(true,false).animate({scrollTop:pos},800, "easeOutBack");	
});
	
$("#B03").click(function(){
	var pos = $("#DDD").position().top;
	$("html,body").stop(true,false).animate({scrollTop:pos},800, "easeOutBack");	
});


