(function () {
    'use strict';

    angular
        .module('app.other-components')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.other-components',
                config: {
                    url: 'other-components',
                    views: {
                        'content@app': {
                            templateUrl: 'app/user-interface/other-components/other-components.html'
                        }
                    },
                    menuGroup: 'user-interface',
                    title: 'Other Components'
                }
            }
        ];
    }
})();
