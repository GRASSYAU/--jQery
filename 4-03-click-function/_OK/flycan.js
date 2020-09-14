$(function() {

    var $content = $("#content");

    $("#big").click(function() {
        $content.css({ "font-size": "30px" });
    });

    $("#mid").click(function() {
        $content.css({ "font-size": "16px" });
    });

    $("#small").click(function() {
        $content.css({ "font-size": "11px" });
    });

})