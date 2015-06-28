// =========================================================================
// COMPONENTS - MODAL
// =========================================================================

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('modalColor', modalColor);

    modalColor.$inject = [];

    /* @ngInject */
    function modalColor() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.click(function () {
                    var color = attrs.targetColor;
                    window.$('#modalColor').attr('data-modal-color', color);
                });
            }
        };
    }
})();
