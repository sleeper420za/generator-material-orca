(function () {
    'use strict';

    angular
        .module('app.calendar')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.calendar',
                config: {
                    url: 'calendar',
                    views: {
                        'content@app': {
                            templateUrl: 'app/calendar/calendar.html'
                        }
                    },
                    title: 'Calendar'
                }
            }
        ];
    }
})();
