// =========================================================================
// NICE SCROLL
// =========================================================================

//Chosen

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('chosenResults', chosenResults);

    chosenResults.$inject = ['nicescrollService'];

    /* @ngInject */
    function chosenResults(nicescrollService) {
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
