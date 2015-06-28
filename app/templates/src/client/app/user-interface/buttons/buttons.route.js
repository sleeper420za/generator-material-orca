(function () {
    'use strict';

    angular
        .module('app.buttons')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.buttons',
                config: {
                    url: 'buttons',
                    views: {
                        'content@app': {
                            templateUrl: 'app/user-interface/buttons/buttons.html'
                        }
                    },
                    menuGroup: 'user-interface',
                    title: 'Buttons'
                }
            }
        ];
    }
})();
