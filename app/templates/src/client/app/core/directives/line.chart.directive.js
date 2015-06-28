// =========================================================================
// Regular Line Charts
// =========================================================================

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('lineChart', lineChart);

    lineChart.$inject = [];

    /* @ngInject */
    function lineChart() {
        return {
            restrict: 'A',
            link: function (scope, element) {

                /* Make some random data for Recent Items chart */

                var data = [];
                var totalPoints = 100;
                var updateInterval = 30;

                function getRandomData() {
                    if (data.length > 0) {
                        data = data.slice(1);
                    }

                    while (data.length < totalPoints) {

                        var prev = data.length > 0 ? data[data.length - 1] : 50,
                            y = prev + Math.random() * 10 - 5;
                        if (y < 0) {
                            y = 0;
                        } else if (y > 90) {
                            y = 90;
                        }

                        data.push(y);
                    }

                    var res = [];
                    for (var i = 0; i < data.length; ++i) {
                        res.push([i, data[i]]);
                    }

                    return res;
                }

                /* Make some random data for Flot Line Chart */

                var d1 = [];
                var d2 = [];
                var d3 = [];

                for (var i = 0; i <= 10; i += 1) {
                    d1.push([i, parseInt(Math.random() * 30)]);
                }

                for (var x = 0; x <= 20; x += 1) {
                    d2.push([x, parseInt(Math.random() * 30)]);
                }

                for (var y = 0; y <= 10; y += 1) {
                    d3.push([y, parseInt(Math.random() * 30)]);
                }

                /* Chart Options */

                var options = {
                    series: {
                        shadowSize: 0,
                        lines: {
                            show: false,
                            lineWidth: 0,
                        },
                    },
                    grid: {
                        borderWidth: 0,
                        labelMargin: 10,
                        hoverable: true,
                        clickable: true,
                        mouseActiveRadius: 6,

                    },
                    xaxis: {
                        tickDecimals: 0,
                        ticks: false
                    },

                    yaxis: {
                        tickDecimals: 0,
                        ticks: false
                    },

                    legend: {
                        show: false
                    }
                };

                /* Regular Line Chart */
                if (window.$('#line-chart')[0]) {
                    window.$.plot(window.$('#line-chart'), [
                        {
                            data: d1,
                            lines: {
                                show: true,
                                fill: 0.98
                            },
                            label: 'Product 1',
                            stack: true,
                            color: '#e3e3e3'
                        },
                        {
                            data: d3,
                            lines: {
                                show: true,
                                fill: 0.98
                            },
                            label: 'Product 2',
                            stack: true,
                            color: '#FFC107'
                        }
                    ], options);
                }

                /* Recent Items Table Chart */
                if (window.$('#recent-items-chart')[0]) {
                    window.$.plot(window.$('#recent-items-chart'), [
                        {
                            data: getRandomData(),
                            lines: {
                                show: true,
                                fill: 0.8
                            },
                            label: 'Items',
                            stack: true,
                            color: '#00BCD4'
                        },
                    ], options);
                }
            }
        };
    }
})();
