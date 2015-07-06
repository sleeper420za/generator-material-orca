// =========================================================================
// CALENDAR WIDGET
// =========================================================================

//Change Calendar Views

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('calendarView', calendarView);

    calendarView.$inject = [];

    /* @ngInject */
    function calendarView() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.on('click', function () {
                    window.$('#calendar').fullCalendar('changeView', attrs.calendarView);
                });
            }
        };
    }
})();
