// =========================================================================
// NO UI SLIDER
// =========================================================================

//Values

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('inputSliderValues', inputSliderValues);

    inputSliderValues.$inject = [];

    /* @ngInject */
    function inputSliderValues() {
        return {
            restrict: 'C',
            link: function (scope, element, attrs) {
                element.noUiSlider({
                    start: [45, 80],
                    connect: true,
                    direction: 'rtl',
                    behaviour: 'tap-drag',
                    range: {
                        'min': 0,
                        'max': 100
                    }
                });

                window.$('.input-slider-values').Link('lower').to(window.$('#value-lower'));
                window.$('.input-slider-values').Link('upper').to(window.$('#value-upper'), 'html');

            }
        };
    }
})();
