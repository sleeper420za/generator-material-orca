(function () {
    'use strict';

    angular
        .module('app.messages')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.messages',
                config: {
                    url: 'messages',
                    views: {
                        'content@app': {
                            templateUrl: 'app/sample-pages/messages/messages.html'
                        }
                    },
                    menuGroup: 'sample-pages',
                    title: 'Messages'
                }
            }
        ];
    }
})();
