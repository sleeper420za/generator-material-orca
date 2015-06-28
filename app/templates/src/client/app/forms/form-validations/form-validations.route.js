(function () {
    'use strict';

    angular
        .module('app.form-validations')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.form-validations',
                config: {
                    url: 'form-validations',
                    views: {
                        'content@app': {
                            templateUrl: 'app/forms/form-validations/form-validations.html'
                        }
                    },
                    menuGroup: 'forms',
                    title: 'Form Validations'
                }
            }
        ];
    }
})();
