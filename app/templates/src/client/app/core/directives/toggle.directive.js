//-----------------------------------------------------
// TOOLTIP AND POPOVER
//-----------------------------------------------------

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('toggle', toggle);

    toggle.$inject = [];

    /* @ngInject */
    function toggle() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var x = attrs.toggle;

                //Tooltip
                if (x === 'tooltip') {
                    element.tooltip();
                }

                //Popover
                if (x === 'popover') {
                    element.popover();
                }
            }
        };
    }
})();
