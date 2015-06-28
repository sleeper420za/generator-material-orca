(function () {
    'use strict';

    angular
        .module('app.box-shadow')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.box-shadow',
                config: {
                    url: 'box-shadow',
                    views: {
                        'content@app': {
                            templateUrl: 'app/user-interface/box-shadow/box-shadow.html'
                        }
                    },
                    menuGroup: 'user-interface',
                    title: 'Box Shadow'
                }
            }
        ];
    }
})();
