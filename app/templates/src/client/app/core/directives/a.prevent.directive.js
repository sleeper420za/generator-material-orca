// =========================================================================
// STOP PROPAGATION
// =========================================================================

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('aPrevent', aPrevent);

    aPrevent.$inject = [];

    /* @ngInject */
    function aPrevent() {
        return {
            restrict: 'C',
            link: function (scope, element) {
                element.on('click', function (event) {
                    event.preventDefault();
                });
            }
        };
    }
})();
