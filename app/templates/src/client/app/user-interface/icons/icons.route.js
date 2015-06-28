(function () {
    'use strict';

    angular
        .module('app.icons')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.icons',
                config: {
                    url: 'icons',
                    views: {
                        'content@app': {
                            templateUrl: 'app/user-interface/icons/icons.html'
                        }
                    },
                    menuGroup: 'user-interface',
                    title: 'Icons'
                }
            }
        ];
    }
})();
