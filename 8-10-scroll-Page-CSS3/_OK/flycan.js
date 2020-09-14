var AAA_start = $("#AAA").position().top - 100;

var BBB_start = $("#BBB").position().top - 100;

var CCC_start = $("#CCC").position().top - 100;

var DDD_start = $("#DDD").position().top - 100;

$("#AAA img").addClass("comeIN"); //先讓第一個 <div> 的圖片出現

$(window).scroll(function() {

    var NOW = $(window).scrollTop();

    console.log(NOW)

    if (NOW >= AAA_start) {
        $("#AAA img").addClass("comeIN");
    }
    

    if (NOW >= BBB_start) {
        $("#BBB img").addClass("comeIN");
    } else {
        $("#BBB img").removeClass("comeIN");
    }


    if (NOW >= CCC_start) {
        $("#CCC img").addClass("comeIN");
    } else {
        $("#CCC img").removeClass("comeIN");
    }


    if (NOW >= DDD_start) {
        $("#DDD img").addClass("comeIN");
    } else {
        $("#DDD img").removeClass("comeIN");
    }


});
