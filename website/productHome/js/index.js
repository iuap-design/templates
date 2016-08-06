(function(window, $){

    /*~function (desW) {
        var winW = document.documentElement.clientWidth;
        document.documentElement.style.fontSize = winW / desW * 100 + "px";
    }(1920);*/




    var $nav = $('.product-nav'),
        iNavTop = $nav.offset().top;

    $(window).on('scroll', function(){
        var sTop = $(document).scrollTop();
        console.log(sTop);
        if(sTop > iNavTop){
            $nav.addClass('fixed');
        }else{
            $nav.removeClass('fixed');
        }
    })


})(window, jQuery);