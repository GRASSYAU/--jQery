var dY,
    $win = $(window);
    
$(function () {
    setEvent();
});

function setEvent(){
    //$win.on('scroll', doScroll);
    $win.scroll(doScroll);
}

function doScroll() {

    var $this = $(this);
    dY = $(this).scrollTop();

    items = $('.js-fadein-up');
    for (var i = 0, len = items.length; i < len; i++) {
        if (dY > $(items[i]).offset().top - $this.height() / 2) {
            $(items[i]).addClass('js-fadein-up--active');
        } else {
            $(items[i]).removeClass('js-fadein-up--active');
        }
    }

    items = $('.js-fadein-left');
    for (var i = 0, len = items.length; i < len; i++) {
        if (dY > $(items[i]).offset().top - $this.height() / 2) {
            $(items[i]).addClass('js-fadein-left--active');
        } else {
            $(items[i]).removeClass('js-fadein-left--active');
        }
    }

    items = $('.js-fadein-right');
    for (var i = 0, len = items.length; i < len; i++) {
        if (dY > $(items[i]).offset().top - $this.height() / 2) {
            $(items[i]).addClass('js-fadein-right--active');
        } else {
            $(items[i]).removeClass('js-fadein-right--active');
        }
    }

}