$(function(){
    var $con = $('.index-content'),
        conWidth = $con.width(),
        defaultLeft = - conWidth;
    $con.css('left', defaultLeft + 'px');
    $('.nav-li').eq(0).on('click', function(){
        $(this).addClass('cur');
        $con.show();
        $con.animate({left: '0'}, 'slow');
    });

    $('.nav-li').eq(0).trigger('click');
});