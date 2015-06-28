(function () {
    'use strict';

    angular
        .module('app.home')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app',
                config: {
                    url: '/',
                    views: {
                        'master': {
                            templateUrl: 'app/layout/shell.html'
                        },
                        'header@app': {
                            templateUrl: 'app/layout/header.html'
                        },
                        'sidebar@app': {
                            templateUrl: 'app/layout/sidebar.html'
                        },
                        'content@app': {
                            templateUrl: 'app/home/home.html'
                        }
                    },
                    title: 'Home'
                }
            }
        ];
    }
})();
