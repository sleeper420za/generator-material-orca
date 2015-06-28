(function () {
    'use strict';

    angular
        .module('app.components')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.components',
                config: {
                    url: 'components',
                    views: {
                        'content@app': {
                            templateUrl: 'app/user-interface/components/components.html'
                        }
                    },
                    menuGroup: 'user-interface',
                    title: 'Components'
                }
            }
        ];
    }
})();
