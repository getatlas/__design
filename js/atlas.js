var subMenu = null;
var navItem = $('.js-navItem');
var subMenuSelector = $('.js-subMenu');
var navItemActiveClass = 'sidebar_navItem-active';

function showSubMenu(element) {
    subMenu = element.data('menu');
    element.addClass(navItemActiveClass);
    if (element.hasClass('js-hasSubMenu')) {
        $('.js-subMenu[data-submenu=' + subMenu + ']').show();
    }
}

function hideSubMenus() {
    subMenu = null;
    navItem.removeClass(navItemActiveClass);
    subMenuSelector.hide();
}

var adminMenu = null;
var adminListItem = $('.js-adminItem');
var adminMenuSelector = $('.js-adminMenu    ');
var adminListItemActiveClass = 'topbar_adminListItem-active';

function showAdminMenu(element) {
    adminMenu = element.data('admin-menu');

    element.addClass(adminListItemActiveClass);
    if (element.hasClass('js-hasSubMenu')) {
        $('.js-adminMenu[data-submenu=' + subMenu + ']').show();
    }
}

function hideAdminMenus() {
    console.log('here');
    adminMenu = null;
    adminListItem.removeClass(adminListItemActiveClass);
    adminMenuSelector.hide();
}

$(document).ready(function () {
    navItem.hover(function () {
        showSubMenu($(this));
    }, function () {
        hideSubMenus();
    });

    adminListItem.hover(function () {
        showAdminMenu($(this));
    }, function () {
        hideAdminMenus();
    });
});
