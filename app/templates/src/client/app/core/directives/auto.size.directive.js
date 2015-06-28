// =========================================================================
// AUTO SIZE TEXTAREA
// =========================================================================

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('autoSize', autoSize);

    autoSize.$inject = [];

    /* @ngInject */
    function autoSize() {
        return {
            restrict: 'A',
            link: function (scope, element) {
                if (element[0]) {
                    window.autosize(element);
                }
            }
        };
    }
})();
