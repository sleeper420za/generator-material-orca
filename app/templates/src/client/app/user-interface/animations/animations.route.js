(function () {
    'use strict';

    angular
        .module('app.animations')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.animations',
                config: {
                    url: 'animations',
                    views: {
                        'content@app': {
                            templateUrl: 'app/user-interface/animations/animations.html'
                        }
                    },
                    menuGroup: 'user-interface',
                    title: 'Animations'
                }
            }
        ];
    }
})();
