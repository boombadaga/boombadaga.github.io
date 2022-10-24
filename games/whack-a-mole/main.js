jQuery(document).ready(function(){
    var add = 0;
    jQuery('.mole').animate({'top':'0%'},5000);
    jQuery('.mole').click(function(){
        jQuery(this).css('background-image','url(hurt.bmp)');
        jQuery(this).stop().animate({'top':'100%'},300, function(){
            add = add - (-1);
            jQuery('.score').html('Score: ' + add);
            jQuery(this).css('background-image','url(mole.bmp)');
            jQuery(this).animate({'top':'0%'},5000);
        });
    });
});