$(function () {

    var dY,
        $win = $(window);

    $win.scroll(function () {
        var $this = $(this);
        dY = $(this).scrollTop();

        if (dY > $('#Js .js-fadein-up').offset().top - $this.height() / 2) {
            $('#Js .js-fadein-up').addClass('js-fadein-up--active');
        }else{
            $('#Js .js-fadein-up').removeClass('js-fadein-up--active');
        }
        if (dY > $('#FrontEnd .js-fadein-up').offset().top - $this.height() / 2) {
            $('#FrontEnd .js-fadein-up').addClass('js-fadein-up--active');
        }else{
            $('#FrontEnd .js-fadein-up').removeClass('js-fadein-up--active');
        }
        if (dY > $('#WebPack .js-fadein-up').offset().top - $this.height() / 2) {
            $('#WebPack .js-fadein-up').addClass('js-fadein-up--active');
        }else{
            $('#WebPack .js-fadein-up').removeClass('js-fadein-up--active');
        }
        if (dY > $('#Oop .js-fadein-up').offset().top - $this.height() / 2) {
            $('#Oop .js-fadein-up').addClass('js-fadein-up--active');
        }else{
            $('#Oop .js-fadein-up').removeClass('js-fadein-up--active');
        }
        if (dY > $('#React .js-fadein-up').offset().top - $this.height() / 2) {
            $('#React .js-fadein-up').addClass('js-fadein-up--active');
        }else{
            $('#React .js-fadein-up').removeClass('js-fadein-up--active');
        }
        if (dY > $('#Vue .js-fadein-up').offset().top - $this.height() / 2) {
            $('#Vue .js-fadein-up').addClass('js-fadein-up--active');
        }else{
            $('#Vue .js-fadein-up').removeClass('js-fadein-up--active');
        }


        if (dY > $('#Js .js-fadein-left').offset().top - $this.height() / 2) {
            $('#Js .js-fadein-left').addClass('js-fadein-left--active');
            $('#Js .js-fadein-right').addClass('js-fadein-right--active');
        }else{
            $('#Js .js-fadein-left').removeClass('js-fadein-left--active');
            $('#Js .js-fadein-right').removeClass('js-fadein-right--active');
        }
        if (dY > $('#FrontEnd .js-fadein-left').offset().top - $this.height() / 2) {
            $('#FrontEnd .js-fadein-left').addClass('js-fadein-left--active');
            $('#FrontEnd .js-fadein-right').addClass('js-fadein-right--active');
        }else{
            $('#FrontEnd .js-fadein-left').removeClass('js-fadein-left--active');
            $('#FrontEnd .js-fadein-right').removeClass('js-fadein-right--active');
        }
        if (dY > $('#WebPack .js-fadein-left').offset().top - $this.height() / 2) {
            $('#WebPack .js-fadein-left').addClass('js-fadein-left--active');
            $('#WebPack .js-fadein-right').addClass('js-fadein-right--active');
        }else{
            $('#WebPack .js-fadein-left').removeClass('js-fadein-left--active');
            $('#WebPack .js-fadein-right').removeClass('js-fadein-right--active');
        }
        if (dY > $('#Oop .js-fadein-left').offset().top - $this.height() / 2) {
            $('#Oop .js-fadein-left').addClass('js-fadein-left--active');
            $('#Oop .js-fadein-right').addClass('js-fadein-right--active');
        }else{
            $('#Oop .js-fadein-left').removeClass('js-fadein-left--active');
            $('#Oop .js-fadein-right').removeClass('js-fadein-right--active');
        }
        if (dY > $('#React .js-fadein-left').offset().top - $this.height() / 2) {
            $('#React .js-fadein-left').addClass('js-fadein-left--active');
            $('#React .js-fadein-right').addClass('js-fadein-right--active');
        }else{
            $('#React .js-fadein-left').removeClass('js-fadein-left--active');
            $('#React .js-fadein-right').removeClass('js-fadein-right--active');
        }
        if (dY > $('#Vue .js-fadein-left').offset().top - $this.height() / 2) {
            $('#Vue .js-fadein-left').addClass('js-fadein-left--active');
            $('#Vue .js-fadein-right').addClass('js-fadein-right--active');
        }else{
            $('#Vue .js-fadein-left').removeClass('js-fadein-left--active');
            $('#Vue .js-fadein-right').removeClass('js-fadein-right--active');
        }
        
    });

});