(function () {
    'use strict';

    angular
        .module('app.templates')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.templates',
                config: {
                    url: 'templates',
                    views: {
                        'content@app': {
                            templateUrl: 'app/widgets/templates/templates.html'
                        }
                    },
                    menuGroup: 'widgets',
                    title: 'Templates'
                }
            }
        ];
    }
})();
