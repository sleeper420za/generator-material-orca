// =========================================================================
// UI - DIALOG
// =========================================================================

//Success Message

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('swalSuccess', swalSuccess);

    swalSuccess.$inject = [];

    /* @ngInject */
    function swalSuccess() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.click(function () {
                    window.swal('Good job!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat, tincidunt vitae ipsum et, pellentesque maximus enim. Mauris eleifend ex semper, lobortis purus sed, pharetra felis', 'success');
                });
            }
        };
    }
})();
