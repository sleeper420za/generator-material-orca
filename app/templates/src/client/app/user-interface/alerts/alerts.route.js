(function () {
    'use strict';

    angular
        .module('app.alerts')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.alerts',
                config: {
                    url: 'alerts',
                    views: {
                        'content@app': {
                            templateUrl: 'app/user-interface/alerts/alerts.html'
                        }
                    },
                    menuGroup: 'user-interface',
                    title: 'Alerts'
                }
            }
        ];
    }
})();
