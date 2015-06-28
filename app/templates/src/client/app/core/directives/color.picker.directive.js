// =========================================================================
// COLOR PICKER
// =========================================================================

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('colorPicker', colorPicker);

    colorPicker.$inject = [];

    /* @ngInject */
    function colorPicker() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                window.$(element).each(function () {
                    var colorOutput = window.$(this).closest('.cp-container').find('.cp-value');
                    window.$(this).farbtastic(colorOutput);
                });
            }
        };
    }
})();
