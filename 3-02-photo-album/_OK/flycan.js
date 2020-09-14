$(function() {

    var $BIG = $("#bigPhoto"); //會重覆使用的物件，養成習慣一開始就宣告變數。

    function changePic_1() {
        $BIG.attr("src", "images/fruit-1.jpg");
    }

    function changePic_2() {
        $BIG.attr("src", "images/fruit-2.jpg");
    }

    function changePic_3() {
        $BIG.attr("src", "images/fruit-3.jpg");
    }

    function changePic_4() {
        $BIG.attr("src", "images/fruit-4.jpg");
    }

    $("#small1").on("click", changePic_1);
    $("#small2").on("click", changePic_2);
    $("#small3").on("click", changePic_3);
    $("#small4").on("click", changePic_4);

})

