(function () {
    'use strict';

    angular
        .module('app.media')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.media',
                config: {
                    url: 'media',
                    views: {
                        'content@app': {
                            templateUrl: 'app/user-interface/media/media.html'
                        }
                    },
                    menuGroup: 'user-interface',
                    title: 'Media'
                }
            }
        ];
    }
})();
