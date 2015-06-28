// =========================================================================
// Bootgrid Data Table
// =========================================================================

//Basic

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('bootgridBasic', bootgridBasic);

    bootgridBasic.$inject = [];

    /* @ngInject */
    function bootgridBasic() {
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
                    }
                });
            }
        };
    }
})();
