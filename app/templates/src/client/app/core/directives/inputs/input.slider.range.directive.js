// =========================================================================
// NO UI SLIDER
// =========================================================================

//Range

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('inputSliderRange', inputSliderRange);

    inputSliderRange.$inject = [];

    /* @ngInject */
    function inputSliderRange() {
        return {
            restrict: 'C',
            link: function (scope, element, attrs) {
                element.noUiSlider({
                    start: [30, 60],
                    range: {
                        'min': 0,
                        'max': 100
                    },
                    connect: true
                });
            }
        };
    }
})();
