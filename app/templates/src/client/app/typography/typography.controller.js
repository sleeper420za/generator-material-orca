(function () {
    'use strict';

    angular
        .module('app.typography')
        .controller('TypographyController', TypographyController);

    TypographyController.$inject = ['logger'];
    /* @ngInject */
    function TypographyController(logger) {
        var vm = this;
        vm.title = 'Typography';

        activate();

        function activate() {
            logger.info('Activated Typography View');
        }
    }
})();
