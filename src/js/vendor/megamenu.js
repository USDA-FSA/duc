/*global $ */
$(document).ready(function () {

    "use strict";

    // "+" icon added to toplevel navigation for mobile -  not needed with other updates
    //$('.megamenu > ul > li:has( > ul)').addClass('megamenu-dropdown-icon');

    // checks for all anchor tags and removes blue glow
    $(".megamenu-topnav").find('a').addClass('remove-glow');


    //Checks if li has sub (ul) and adds class for toggle icon - just an UI
    //$('.megamenu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    //Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)


    $(".megamenu-topnav > a").each(function(){
        $(this).append(' <img src="img/angle-arrow-down-topnav.svg" width="10px"/>');
    });

    $(".megamenu > ul").before("<a href=\"#\" class=\"megamenu-mobile\">Menu</a>");

    //Adds menu-mobile class (for mobile toggle menu) before the normal menu
    //Mobile menu is hidden if width is more then 959px, but normal menu is displayed
    //Normal menu is hidden if width is below 959px, and jquery adds mobile menu
    //Done this way so it can be used with wordpress without any trouble

    /*
    $(".megamenu > ul > li").hover(function (e) {
        if ($(window).width() > 943) {
            $(this).children("ul").stop(true, false).fadeToggle(150);
            e.preventDefault();
        }
    });
    */
    //If width is more than 943px dropdowns are displayed on hover

    //$(".megamenu > ul > li").click(function () {

    $(".megamenu-topnav > a").click(function () {
        // set a temporary class
        $(this).addClass('this');

        $(".megamenu-topnav > a").each(function () {

            // check for class
            if( $(this).hasClass('this') ){
                // if subnav is already open, remove indicator
                if( $(this).hasClass('megamenu-subnav-selected') ){
                    $(this).removeClass('megamenu-subnav-selected');
                } else {
                    $(this).addClass('megamenu-subnav-selected');
                }
            } else {
                $(this).removeClass('megamenu-subnav-selected');
            }
            // clean up temp class
            $(this).removeClass('this');
        });

        // subnav hide and show
        $(".megamenu-topnav").find('ul.subnav').fadeOut(50);
        $(this).next('ul').stop(true, false, true).fadeToggle(150);

        return false;

    });
    //If width is less or equal to 943px dropdowns are displayed on click (thanks Aman Jain from stackoverflow)

    $(".megamenu-mobile").click(function (e) {
        $(".megamenu > ul").toggleClass('show-on-mobile');
        e.preventDefault();
    });
    //when clicked on mobile-menu, normal menu is shown as a list, classic rwd menu story (thanks mwl from stackoverflow)

});
