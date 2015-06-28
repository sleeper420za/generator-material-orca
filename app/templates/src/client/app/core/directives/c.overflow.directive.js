// =========================================================================
// NICE SCROLL
// =========================================================================

//For custom class

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('cOverflow', cOverflow);

    cOverflow.$inject = ['nicescrollService'];

    /* @ngInject */
    function cOverflow(nicescrollService) {
        return {
            restrict: 'C',
            link: function (scope, element) {

                if (!window.$('html').hasClass('ismobile')) {
                    nicescrollService.niceScroll(element, 'rgba(0,0,0,0.4)', '5px');
                }
            }
        };
    }
})();
