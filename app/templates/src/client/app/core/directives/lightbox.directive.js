// =========================================================================
// LIGHTBOX
// =========================================================================

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('lightbox', lightbox);

    lightbox.$inject = [];

    /* @ngInject */
    function lightbox() {
        return {
            restrict: 'C',
            link: function (scope, element) {
                element.lightGallery({
                    enableTouch: true
                });
            }
        };
    }
})();
