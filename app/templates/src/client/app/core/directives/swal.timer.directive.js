// =========================================================================
// UI - DIALOG
// =========================================================================

//Auto Close Timer

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('swalTimer', swalTimer);

    swalTimer.$inject = [];

    /* @ngInject */
    function swalTimer() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.click(function () {
                    window.swal({
                        title: 'Auto close alert!',
                        text: 'I will close in 2 seconds.',
                        timer: 2000,
                        showConfirmButton: false
                    });
                });
            }
        };
    }
})();
