(function () {
    'use strict';

    angular
        .module('app.form-elements')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.form-elements',
                config: {
                    url: 'form-elements',
                    views: {
                        'content@app': {
                            templateUrl: 'app/forms/form-elements/form-elements.html'
                        }
                    },
                    menuGroup: 'forms',
                    title: 'Form Elements'
                }
            }
        ];
    }
})();
