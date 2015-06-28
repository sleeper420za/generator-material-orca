(function () {
    'use strict';

    angular
        .module('app.generic-classes')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.generic-classes',
                config: {
                    url: 'generic-classes',
                    views: {
                        'content@app': {
                            templateUrl: 'app/generic-classes/generic-classes.html'
                        }
                    },
                    title: 'Generic Classes'
                }
            }
        ];
    }
})();
