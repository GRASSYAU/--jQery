$(function() {

    var $BIG = $("#bigPhoto"); //會重覆使用的物件，養成習慣一開始就宣告變數。

    function changePic() {

        var WHO = $(this).attr("id");
        
		//alert(WHO); //可以測試目前滑鼠點選到那一個物件（元素）

        if (WHO == "small1") {
            $BIG.attr("src", "images/fruit-1.jpg");
        }
        if (WHO == "small2") {
            $BIG.attr("src", "images/fruit-2.jpg");
        }
        if (WHO == "small3") {
            $BIG.attr("src", "images/fruit-3.jpg");
        }
        if (WHO == "small4") {
            $BIG.attr("src", "images/fruit-4.jpg");
        }

    }

    $("#small1").on("click", changePic);
    $("#small2").on("click", changePic);
    $("#small3").on("click", changePic);
    $("#small4").on("click", changePic);

})


