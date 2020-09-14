$(".menu>ul>li").hover(
    function() {
        $(this).find("ul").stop(true, true).slideDown(500);
    },
    function() {
        $(this).find("ul").stop(true, true).slideUp(500);
    }
);

