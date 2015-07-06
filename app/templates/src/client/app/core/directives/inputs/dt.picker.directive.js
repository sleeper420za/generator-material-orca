// =========================================================================
// DATE TIME PICKER
// =========================================================================

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('dtPicker', dtPicker);

    dtPicker.$inject = [];

    /* @ngInject */
    function dtPicker() {
        return {
            require: '?ngModel',
            restrict: 'A',
            scope: {
                viewMode: '@',
                format: '@'
            },
            link: function (scope, element, attrs, ngModel) {
                element.datetimepicker({
                        viewMode: scope.viewMode,
                        format: scope.format
                    })
                    .on('dp.change', function (e) {
                        // datepick doesn't update the value of the ng-model when the date is changed
                        // when date changed event is triggered
                        // retreive the value of the new date
                        // set the value to the ng-model
                        ngModel.$setViewValue(window.$(element).val());
                    });
            }
        };
    }
})();
