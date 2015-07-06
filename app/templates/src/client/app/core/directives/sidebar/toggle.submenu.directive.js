// =========================================================================
// SUBMENU TOGGLE
// =========================================================================

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('toggleSubmenu', toggleSubmenu);

    toggleSubmenu.$inject = [];

    /* @ngInject */
    function toggleSubmenu() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.click(function () {
                    element.parent().toggleClass('toggled');
                    element.parent().find('ul').stop(true, false).slideToggle(200);
                });
            }
        };
    }
})();
