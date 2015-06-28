// =========================================================================
// UI - DIALOG
// =========================================================================

//Custom Image

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('swalImg', swalImg);

    swalImg.$inject = [];

    /* @ngInject */
    function swalImg() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.click(function () {
                    window.swal({
                        title: 'Sweet!',
                        text: 'Here is a custom image.',
                        imageUrl: 'images/thumbs-up.png'
                    });
                });
            }
        };
    }
})();
