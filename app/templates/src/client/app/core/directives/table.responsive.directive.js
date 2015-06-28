// =========================================================================
// NICE SCROLL
// =========================================================================

//Table

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('tableResponsive', tableResponsive);

    tableResponsive.$inject = ['nicescrollService'];

    /* @ngInject */
    function tableResponsive(nicescrollService) {
        return {
            restrict: 'C',
            link: function (scope, element) {

                if (!window.$('html').hasClass('ismobile')) {
                    nicescrollService.niceScroll(element, 'rgba(0,0,0,0.3)', '5px');
                }
            }
        };
    }
})();
