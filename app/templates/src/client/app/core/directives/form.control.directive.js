// =========================================================================
// PLACEHOLDER FOR IE 9 (on .form-control class)
// =========================================================================

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('formControl', formControl);

    formControl.$inject = [];

    /* @ngInject */
    function formControl() {
        return {
            restrict: 'C',
            link: function (scope, element, attrs) {
                if (angular.element('html').hasClass('ie9')) {
                    window.$('input, textarea').placeholder({
                        customClass: 'ie9-placeholder'
                    });
                }
            }
        };
    }
})();
