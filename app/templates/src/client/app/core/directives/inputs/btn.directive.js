// =========================================================================
// WAVES
// =========================================================================

// For .btn classes

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('btn', btn);

    btn.$inject = [];

    /* @ngInject */
    function btn() {
        return {
            restrict: 'C',
            link: function (scope, element) {
                window.Waves.attach(element);
                window.Waves.init();
            }
        };
    }
})();
