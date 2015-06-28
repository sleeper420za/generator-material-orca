// =========================================================================
// INPUT FEILDS MODIFICATION
// =========================================================================

//Add blue animated border and remove with condition when focus and blur

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('fgLine', fgLine);

    fgLine.$inject = [];

    /* @ngInject */
    function fgLine() {
        return {
            restrict: 'C',
            link: function (scope, element) {
                if (window.$('.fg-line')[0]) {
                    window.$('body').on('focus', '.form-control', function () {
                        window.$(this).closest('.fg-line').addClass('fg-toggled');
                    });

                    window.$('body').on('blur', '.form-control', function () {
                        var p = window.$(this).closest('.form-group');
                        var i = p.find('.form-control').val();

                        if (p.hasClass('fg-float')) {
                            /*jshint -W116 */
                            if (i.length == 0) {
                                window.$(this).closest('.fg-line').removeClass('fg-toggled');
                            }
                        } else {
                            window.$(this).closest('.fg-line').removeClass('fg-toggled');
                        }
                    });
                }
            }
        };
    }
})();
