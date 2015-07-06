// =========================================================================
// MEDIA ELEMENT
// =========================================================================

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('mediaElement', mediaElement);

    mediaElement.$inject = [];

    /* @ngInject */
    function mediaElement() {
        return {
            restrict: 'A',
            link: function (scope, element) {
                element.mediaelementplayer();
            }
        };
    }
})();
