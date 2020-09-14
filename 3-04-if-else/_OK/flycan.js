$(function() {

    var $BIG = $("#bigPhoto");

    function changePic() {

        var WHO = $(this).attr("id");
        //alert(WHO);

        if (WHO == "small1") {
            $BIG.attr("src", "images/fruit-1.jpg");
        } 
		else if (WHO == "small2") {
            $BIG.attr("src", "images/fruit-2.jpg");
        } 
		else if (WHO == "small3") {
            $BIG.attr("src", "images/fruit-3.jpg");
        } 
		else if (WHO == "small4") {
            $BIG.attr("src", "images/fruit-4.jpg");
        }

    }

    $("#small1").on("click", changePic);
    $("#small2").on("click", changePic);
    $("#small3").on("click", changePic);
    $("#small4").on("click", changePic);

})

