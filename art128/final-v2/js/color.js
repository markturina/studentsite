window.addEventListener('DOMContentLoaded', (event) => {
    jQuery('.site-header.sticky').css("background-color", "transparent");
    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > 0) {
            jQuery('.site-header.sticky').css("background-color", "white");              
        } else {
            jQuery('.site-header.sticky').css("background-color", "transparent");
        }
    });
}); 