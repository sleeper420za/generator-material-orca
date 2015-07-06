// =========================================================================
// NICE SCROLL
// =========================================================================

//Chosen

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('tabNav', tabNav);

    tabNav.$inject = ['nicescrollService'];

    /* @ngInject */
    function tabNav(nicescrollService) {
        return {
            restrict: 'C',
            link: function (scope, element) {

                if (!window.$('html').hasClass('ismobile')) {
                    nicescrollService.niceScroll(element, 'rgba(0,0,0,0.3)', '1px');
                }
            }
        };
    }
})();
