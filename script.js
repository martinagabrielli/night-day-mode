function activateNightMode(){
    jQuery('#night-mode').addClass('show');
    jQuery('#day-mode').removeClass('show');
}

function activateDayMode(){
    jQuery('#day-mode').addClass('show');
    jQuery('#night-mode').removeClass('show');
}

jQuery('#day-mode').click(activateNightMode);
jQuery('#night-mode').click(activateDayMode);