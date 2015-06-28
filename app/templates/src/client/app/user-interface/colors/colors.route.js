(function () {
    'use strict';

    angular
        .module('app.colors')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.colors',
                config: {
                    url: 'colors',
                    views: {
                        'content@app': {
                            templateUrl: 'app/user-interface/colors/colors.html'
                        }
                    },
                    menuGroup: 'user-interface',
                    title: 'Colors'
                }
            }
        ];
    }
})();
