// =========================================================================
// CHOSEN
// =========================================================================

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('tagSelect', tagSelect);

    tagSelect.$inject = [];

    /* @ngInject */
    function tagSelect() {
        return {
            restrict: 'A',
            link: function (scope, element) {
                if (element[0]) {
                    element.chosen({
                        width: '100%',
                        /*jshint -W106 */
                        allow_single_deselect: true
                    });
                }
            }
        };
    }
})();
