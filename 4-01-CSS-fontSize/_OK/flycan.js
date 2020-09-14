$(function() {

    var $content = $("#content"); //養成宣告變數把會重覆使用的物件放在變數之內

    function doBig() {
        $content.css({ "font-size" : "30px" });
    }

    function doMid() {
        $content.css({ "font-size" : "16px" });
    }

    function doSmall() {
        $content.css({ "font-size" : "11px" });
    }

    $("#big").on("click", doBig);
    $("#mid").on("click", doMid);
    $("#small").on("click", doSmall);

})

