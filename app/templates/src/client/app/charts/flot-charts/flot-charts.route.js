(function () {
    'use strict';

    angular
        .module('app.flot-charts')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.flot-charts',
                config: {
                    url: 'flot-charts',
                    views: {
                        'content@app': {
                            templateUrl: 'app/charts/flot-charts/flot-charts.html'
                        }
                    },
                    menuGroup: 'charts',
                    title: 'Flot Charts'
                }
            }
        ];
    }
})();
