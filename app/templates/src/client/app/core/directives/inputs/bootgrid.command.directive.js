// =========================================================================
// Bootgrid Data Table
// =========================================================================

//Command

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('bootgridCommand', bootgridCommand);

    bootgridCommand.$inject = [];

    /* @ngInject */
    function bootgridCommand() {
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
                    formatters: {
                        'commands': function (column, row) {
                            /*jshint -W109 */
                            return '<button type="button" class="btn btn-icon command-edit" data-row-id="' + row.id + '"><span class="md md-edit"></span></button> ' +
                                '<button type="button" class="btn btn-icon command-delete" data-row-id="' + row.id + '"><span class="md md-delete"></span></button>';
                        }
                    }
                });
            }
        };
    }
})();
