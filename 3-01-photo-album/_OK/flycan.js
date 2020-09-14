$(function () {

    function changePic_1() {
        $("#bigPhoto").attr("src", "images/fruit-1.jpg");
    }

    function changePic_2() {
        $("#bigPhoto").attr("src", "images/fruit-2.jpg");
    }

    function changePic_3() {
        $("#bigPhoto").attr("src", "images/fruit-3.jpg");
    }

    function changePic_4() {
        $("#bigPhoto").attr("src", "images/fruit-4.jpg");
    }

    $("#small1").on("click", changePic_1);
    $("#small2").on("click", changePic_2);
    $("#small3").on("click", changePic_3);
    $("#small4").on("click", changePic_4);

})

