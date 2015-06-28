// =========================================================================
// INPUT MASK
// =========================================================================

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('inputMask', inputMask);

    inputMask.$inject = [];

    /* @ngInject */
    function inputMask() {
        return {
            restrict: 'A',
            scope: {
                inputMask: '='
            },
            link: function (scope, element) {
                element.mask(scope.inputMask.mask);
            }
        };
    }
})();
