//-----------------------------------------------------
// COLLAPSE
//-----------------------------------------------------

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('collapse', collapse);

    collapse.$inject = [];

    /* @ngInject */
    function collapse() {
        return {
            restrict: 'C',
            link: function (scope, element, attrs) {
                element.on('show.bs.collapse', function (e) {
                    window.$(this).closest('.panel').find('.panel-heading').addClass('active');
                });

                element.on('hide.bs.collapse', function (e) {
                    window.$(this).closest('.panel').find('.panel-heading').removeClass('active');
                });

                //Add active class for pre opened items
                window.$('.collapse.in').each(function () {
                    window.$(this).closest('.panel').find('.panel-heading').addClass('active');
                });
            }
        };
    }
})();
