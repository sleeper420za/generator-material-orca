// =========================================================================
// SUMMERNOTE HTML EDITOR
// =========================================================================

//Edit and Save

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('hecButton', hecButton);

    hecButton.$inject = [];

    /* @ngInject */
    function hecButton() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.on('click', function () {
                    window.$('.hec-click').summernote({
                        focus: true
                    });

                    window.$('.hec-save').show();
                });

                window.$('.hec-save').on('click', function () {
                    window.$('.hec-click').destroy();
                    window.$('.hec-save').hide();
                });
            }
        };
    }
})();
