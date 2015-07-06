// =========================================================================
// NO UI SLIDER
// =========================================================================

//Basic

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('inputSlider', inputSlider);

    inputSlider.$inject = [];

    /* @ngInject */
    function inputSlider() {
        return {
            restrict: 'C',
            link: function (scope, element, attrs) {
                var isStart = attrs.isStart;

                element.noUiSlider({
                    start: isStart,
                    range: {
                        'min': 0,
                        'max': 100,
                    }
                });
            }
        };
    }
})();
