(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('QuickbarController', QuickbarController);

    QuickbarController.$inject = [];

    /* @ngInject */
    function QuickbarController() {
        var quickbar = this;

        activate();

        ////////////////

        function activate() {}
    }
})();
