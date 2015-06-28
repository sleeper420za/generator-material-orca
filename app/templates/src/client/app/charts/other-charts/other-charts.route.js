(function () {
    'use strict';

    angular
        .module('app.other-charts')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.other-charts',
                config: {
                    url: 'other-charts',
                    views: {
                        'content@app': {
                            templateUrl: 'app/charts/other-charts/other-charts.html'
                        }
                    },
                    menuGroup: 'charts',
                    title: 'Other Charts'
                }
            }
        ];
    }
})();
