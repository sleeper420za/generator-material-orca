(function () {
    'use strict';

    angular
        .module('app.data-tables')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.data-tables',
                config: {
                    url: 'data-tables',
                    views: {
                        'content@app': {
                            templateUrl: 'app/tables/data-tables/data-tables.html'
                        }
                    },
                    menuGroup: 'tables',
                    title: 'Data Tables'
                }
            }
        ];
    }
})();
