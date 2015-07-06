// =========================================================================
// SPARKLINE CHARTS
// =========================================================================

//Pie Chart

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('sparklinePie', sparklinePie);

    sparklinePie.$inject = [];

    /* @ngInject */
    function sparklinePie() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                function sparklinePie(select, values, width, height, sliceColors) {
                    window.$(select).sparkline(values, {
                        type: 'pie',
                        width: width,
                        height: height,
                        sliceColors: sliceColors,
                        offset: 0,
                        borderWidth: 0
                    });
                }

                if (window.$('.stats-pie')[0]) {
                    sparklinePie('.stats-pie', [20, 35, 30, 5], 45, 45, ['#fff', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.2)']);
                }
            }
        };
    }
})();
