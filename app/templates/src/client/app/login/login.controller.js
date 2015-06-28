(function () {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['logger'];
    /* @ngInject */
    function LoginController(logger) {
        var login = this;
        login.title = 'Login';

        login.login = 1;
        login.register = 0;
        login.forgot = 0;

        activate();

        function activate() {
            logger.info('Activated Login View');
        }
    }
})();
