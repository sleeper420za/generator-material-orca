// =========================================================================
// STOP PROPAGATION
// =========================================================================

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('stopPropagate', stopPropagate);

    stopPropagate.$inject = [];

    /* @ngInject */
    function stopPropagate() {
        return {
            restrict: 'C',
            link: function (scope, element) {
                element.on('click', function (event) {
                    event.stopPropagation();
                });
            }
        };
    }
})();
