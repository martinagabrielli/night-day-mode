function activateNightMode(){
    jQuery('#night-mode').addClass('show');
    jQuery('#day-mode').removeClass('show');
    jQuery('body').addClass('dark');
    Cookies.set('nightWatch', 'active');
}

function activateDayMode(){
    jQuery('#day-mode').addClass('show');
    jQuery('#night-mode').removeClass('show');
    jQuery('body').removeClass('dark');
    Cookies.set('nightWatch', 'inactive')
}

function checkCookie(){
    if(Cookies.get('nightWatch') == 'active'){
        activateNightMode();
    } else {
        activateDayMode();
    }
}

checkCookie();
jQuery('#day-mode').click(activateNightMode);
jQuery('#night-mode').click(activateDayMode);


