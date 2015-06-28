// =========================================================================
// UI - DIALOG
// =========================================================================

//Basic

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('swalBasic', swalBasic);

    swalBasic.$inject = [];

    /* @ngInject */
    function swalBasic() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.click(function () {
                    window.swal('Here is a message!');
                });
            }
        };
    }
})();
