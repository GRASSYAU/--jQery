$(function() {

    var $content = $("#content");

    $("#big").on("click", function() {
        $content.css({ "font-size" : "30px" });
    });

    $("#mid").on("click", function() {
        $content.css({ "font-size" : "16px" });
    });

    $("#small").on("click", function() {
        $content.css({ "font-size" : "11px" });
    });

})

