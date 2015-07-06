// =========================================================================
// SUMMERNOTE HTML EDITOR
// =========================================================================

//Air Mode

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('hecAirmod', hecAirmod);

    hecAirmod.$inject = [];

    /* @ngInject */
    function hecAirmod() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.summernote({
                    airMode: true
                });
            }
        };
    }
})();
