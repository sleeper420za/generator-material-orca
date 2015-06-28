// =========================================================================
// UI - DIALOG
// =========================================================================

//Parameter

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('swalParams', swalParams);

    swalParams.$inject = [];

    /* @ngInject */
    function swalParams() {
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
                        cancelButtonText: 'No, cancel plx!',
                        closeOnConfirm: false,
                        closeOnCancel: false
                    }, function (isConfirm) {
                        if (isConfirm) {
                            window.swal('Deleted!', 'Your imaginary file has been deleted.', 'success');
                        } else {
                            window.swal('Cancelled', 'Your imaginary file is safe :)', 'error');
                        }
                    });
                });
            }
        };
    }
})();
