(function () {
    'use strict';

    angular
        .module('app.typography')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.typography',
                config: {
                    url: 'typography',
                    views: {
                        'content@app': {
                            templateUrl: 'app/typography/typography.html'
                        }
                    },
                    title: 'Typography'
                }
            }
        ];
    }
})();
