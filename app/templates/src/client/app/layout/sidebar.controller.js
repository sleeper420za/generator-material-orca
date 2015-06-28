(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = [];

    /* @ngInject */
    function SidebarController() {
        var sidebar = this;

        activate();

        ////////////////

        function activate() {}
    }
})();
