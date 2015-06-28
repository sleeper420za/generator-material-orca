(function () {
    'use strict';

    angular
        .module('app.list-view')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.list-view',
                config: {
                    url: 'list-view',
                    views: {
                        'content@app': {
                            templateUrl: 'app/sample-pages/list-view/list-view.html'
                        }
                    },
                    menuGroup: 'sample-pages',
                    title: 'List View'
                }
            }
        ];
    }
})();
