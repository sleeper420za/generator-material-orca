(function () {
    'use strict';

    angular
        .module('app.form-examples')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.form-examples',
                config: {
                    url: 'form-examples',
                    views: {
                        'content@app': {
                            templateUrl: 'app/forms/form-examples/form-examples.html'
                        }
                    },
                    menuGroup: 'forms',
                    title: 'Form Examples'
                }
            }
        ];
    }
})();
