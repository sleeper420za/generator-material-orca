// =========================================================================
// UI - DIALOG
// =========================================================================

//Warning Message

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('swalWarning', swalWarning);

    swalWarning.$inject = [];

    /* @ngInject */
    function swalWarning() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.click(function () {
                    window.swal({
                        title: 'Are you sure?',
                        text: 'You will not be able to recover this imaginary file!',
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#DD6B55',
                        confirmButtonText: 'Yes, delete it!',
                        closeOnConfirm: false
                    }, function () {
                        window.swal('Deleted!', 'Your imaginary file has been deleted.', 'success');
                    });
                });
            }
        };
    }
})();
