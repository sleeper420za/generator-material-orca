// =========================================================================
// UI - DIALOG
// =========================================================================

//A title with a text under

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('swalText', swalText);

    swalText.$inject = [];

    /* @ngInject */
    function swalText() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.click(function () {
                    window.swal('Here is a message!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat, tincidunt vitae ipsum et, pellentesque maximus enim. Mauris eleifend ex semper, lobortis purus sed, pharetra felis');
                });
            }
        };
    }
})();
