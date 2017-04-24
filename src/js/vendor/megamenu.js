// Using Module Pattern
// Needs to be refactored

var MegaMenu = (function () {

    // Private Methods
    var initMegaMenu = (function (settings) {

        var topnav = $(".megamenu-topnav");
        var topnavAnchor = $(".megamenu-topnav > a");
        var topnavList = $(".megamenu > ul");
        var subnavSelected = "megamenu-subnav-selected";

        // remove blue glow
        topnav.find('a').addClass('remove-glow');

        // Add down arrow to topnav items with a subnav
        topnavAnchor.each(function () {
            $(this).append(' <img src="img/angle-arrow-down-topnav.svg" width="10px"/>');
        });

        // Set Mobile Menu
        topnavList.before("<a href=\"#\" class=\"megamenu-mobile\">Menu</a>");

        // Set click event to topnav items
        topnavAnchor.click(function () {
            // set a temporary class
            $(this).addClass('this');

            topnavAnchor.each(function () {

                // check for class
                if ($(this).hasClass('this')) {
                    // if subnav is already open, remove indicator
                    if ($(this).hasClass(subnavSelected)) {
                        $(this).removeClass(subnavSelected);
                    } else {
                        $(this).addClass(subnavSelected);
                    }
                } else {
                    $(this).removeClass(subnavSelected);
                }
                // clean up temp class
                $(this).removeClass('this');
            });

            // subnav hide and show
            topnav.find('ul.subnav').fadeOut(50);
            $(this).next('ul').stop(true, false, true).fadeToggle(150);

            return false;

        });
    });


    //Public Methods
    var megaMenuReturn = {

        init: function (settings) {
            initMegaMenu(settings);
        },

        publicMethod: function () {
            //code
        }
    };

    return megaMenuReturn;

})();

$(document).ready(function () {
    "use strict";
    MegaMenu.init();
});