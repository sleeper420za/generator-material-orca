// =========================================================================
// SUMMERNOTE HTML EDITOR
// =========================================================================

//Basic

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('htmlEditor', htmlEditor);

    htmlEditor.$inject = [];

    /* @ngInject */
    function htmlEditor() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.summernote({
                    height: 150
                });
            }

        };
    }
})();
