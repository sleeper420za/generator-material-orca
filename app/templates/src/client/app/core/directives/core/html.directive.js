// =========================================================================
// NICE SCROLL
// =========================================================================

//Html

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('html', html);

    html.$inject = ['nicescrollService'];

    /* @ngInject */
    function html(nicescrollService) {
        return {
            restrict: 'E',
            link: function (scope, element) {

                if (!element.hasClass('ismobile')) {
                    if (!window.$('.login-content')[0]) {
                        nicescrollService.niceScroll(element, 'rgba(0,0,0,0.3)', '5px');
                    }
                }
            }
        };
    }
})();
