// =========================================================================
// WAVES
// =========================================================================

//Wave buttons for .btn-wave class

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('btnWave', btnWave);

    btnWave.$inject = [];

    /* @ngInject */
    function btnWave() {
        return {
            restrict: 'C',
            link: function (scope, element) {
                window.Waves.attach(element);
                window.Waves.init();
            }
        };
    }
})();
