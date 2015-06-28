// =========================================================================
// BOOTSTRAP SELECT
// =========================================================================

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('selectPicker', selectPicker);

    selectPicker.$inject = [];

    /* @ngInject */
    function selectPicker() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                //if (element[0]) {
                element.selectpicker();
                //}
            }
        };
    }
})();
