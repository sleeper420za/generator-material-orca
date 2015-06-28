(function () {
    'use strict';

    angular
        .module('app.normal-tables')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.normal-tables',
                config: {
                    url: 'normal-tables',
                    views: {
                        'content@app': {
                            templateUrl: 'app/tables/normal-tables/normal-tables.html'
                        }
                    },
                    menuGroup: 'tables',
                    title: 'Normal Tables'
                }
            }
        ];
    }
})();
