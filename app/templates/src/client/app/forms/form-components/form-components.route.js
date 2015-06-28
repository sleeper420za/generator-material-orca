(function () {
    'use strict';

    angular
        .module('app.form-components')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.form-components',
                config: {
                    url: 'form-components',
                    views: {
                        'content@app': {
                            templateUrl: 'app/forms/form-components/form-components.html'
                        }
                    },
                    menuGroup: 'forms',
                    title: 'Form Components'
                }
            }
        ];
    }
})();
