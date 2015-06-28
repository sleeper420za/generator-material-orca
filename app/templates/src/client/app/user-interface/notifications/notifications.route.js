(function () {
    'use strict';

    angular
        .module('app.notifications')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.notifications',
                config: {
                    url: 'notifications',
                    views: {
                        'content@app': {
                            templateUrl: 'app/user-interface/notifications/notifications.html'
                        }
                    },
                    menuGroup: 'user-interface',
                    title: 'Notifications'
                }
            }
        ];
    }
})();
