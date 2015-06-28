// =========================================================================
// Bootgrid Data Table
// =========================================================================

//Selection

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('bootgridSelection', bootgridSelection);

    bootgridSelection.$inject = [];

    /* @ngInject */
    function bootgridSelection() {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                element.bootgrid({
                    css: {
                        icon: 'md icon',
                        iconColumns: 'md-view-module',
                        iconDown: 'md-expand-more',
                        iconRefresh: 'md-refresh',
                        iconUp: 'md-expand-less'
                    },
                    selection: true,
                    multiSelect: true,
                    rowSelect: true,
                    keepSelection: true
                });
            }
        };
    }
})();
