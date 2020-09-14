var AAA_start = $("#AAA").position().top - 100;
var AAA_end = AAA_start + $("#AAA").height() / 2;

var BBB_start = $("#BBB").position().top - 100;
var BBB_end = BBB_start + $("#BBB").height() / 2;

var CCC_start = $("#CCC").position().top - 100;
var CCC_end = CCC_start + $("#CCC").height() / 2;

var DDD_start = $("#DDD").position().top - 100;
var DDD_end = DDD_start + $("#DDD").height() / 2;

$("#AAA img").addClass("comeIN");

$(window).scroll(function() {

    var NOW = $(window).scrollTop();

    console.log(NOW)

    if (NOW >= AAA_start) {
        $("#AAA img").addClass("comeIN");
    }
    if (NOW >= AAA_end) {
        $("#AAA img").removeClass("comeIN");
    }

    if (NOW >= BBB_start) {
        $("#BBB img").addClass("comeIN");
    } else {
        $("#BBB img").removeClass("comeIN");
    }
	
    if (NOW >= BBB_end) {
        $("#BBB img").removeClass("comeIN");
    }

    if (NOW >= CCC_start) {
        $("#CCC img").addClass("comeIN");
    } else {
        $("#CCC img").removeClass("comeIN");
    }
	
    if (NOW >= CCC_end) {
        $("#CCC img").removeClass("comeIN");
    }

    if (NOW >= DDD_start) {
        $("#DDD img").addClass("comeIN");
    } else {
        $("#DDD img").removeClass("comeIN");
    }
	
    if (NOW >= DDD_end) {
        $("#DDD img").removeClass("comeIN");
    }

});