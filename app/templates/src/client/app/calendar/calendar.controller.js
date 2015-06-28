(function () {
    'use strict';

    angular
        .module('app.calendar')
        .controller('CalendarController', CalendarController);

    CalendarController.$inject = [];

    /* @ngInject */
    function CalendarController() {

        //Create and add Action button with dropdown in Calendar header.
        this.month = 'month';

        this.actionMenu = '<ul class="actions actions-alt" id="fc-actions">' +
            '<li class="dropdown">' +
            '<a href="" data-toggle="dropdown"><i class="md md-more-vert"></i></a>' +
            '<ul class="dropdown-menu dropdown-menu-right">' +
            '<li class="active">' +
            '<a data-calendar-view="month" href="">Month View</a>' +
            '</li>' +
            '<li>' +
            '<a data-calendar-view="basicWeek" href="">Week View</a>' +
            '</li>' +
            '<li>' +
            '<a data-calendar-view="agendaWeek" href="">Agenda Week View</a>' +
            '</li>' +
            '<li>' +
            '<a data-calendar-view="basicDay" href="">Day View</a>' +
            '</li>' +
            '<li>' +
            '<a data-calendar-view="agendaDay" href="">Agenda Day View</a>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '</li>';

        //Calendar Event Data
        this.calendarData = {
            eventName: ''
        };

        //Tags
        this.tags = [
            'bgm-teal',
            'bgm-red',
            'bgm-pink',
            'bgm-blue',
            'bgm-lime',
            'bgm-green',
            'bgm-cyan',
            'bgm-orange',
            'bgm-purple',
            'bgm-gray',
            'bgm-black',
        ];

        this.onTagClick = function (tag, $index) {
            this.activeState = $index;
            this.activeTagColor = tag;
        };

        //Open new event modal on selecting a day
        this.onSelect = function (argStart, argEnd) {
            window.$('#addNew-event').modal('show');
            this.calendarData.getStart = argStart;
            this.calendarData.getEnd = argEnd;
        };

        //Add new event
        this.addEvent = function () {
            var tagColor = window.$('.event-tag > span.selected').data('tag');

            if (this.calendarData.eventName.length > 0) {

                //Render Event
                window.$('#calendar').fullCalendar('renderEvent', {
                    title: this.calendarData.eventName,
                    start: this.calendarData.getStart,
                    end: this.calendarData.getEnd,
                    allDay: true,
                    className: this.activeTagColor

                }, true); //Stick the event

                this.activeState = -1;
                this.calendarData.eventName = '';
                window.$('#addNew-event').modal('hide');
            }
        };

        activate();

        ////////////////

        function activate() {}
    }
})();
