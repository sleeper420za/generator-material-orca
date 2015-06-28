(function () {
    'use strict';

    angular
        .module('app.widgets')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.widgets',
                config: {
                    url: 'widgets',
                    views: {
                        'content@app': {
                            templateUrl: 'app/widgets/widgets/widgets.html'
                        }
                    },
                    menuGroup: 'widgets',
                    title: 'Widgets'
                }
            }
        ];
    }
})();
