(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('MainController', MainController);

    MainController.$inject = ['$timeout', '$state', 'GrowlService'];

    /* @ngInject */
    function MainController($timeout, $state, GrowlService) {
        var main = this;

        //Welcome Message
        GrowlService.growl('Welcome back Martin!', 'inverse');

        // Detact Mobile Browser
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            angular.element('html').addClass('ismobile');
        }

        // By default Sidbars are hidden in boxed layout and in wide layout only the right sidebar is hidden.
        main.sidebarToggle = {
            left: false,
            right: false
        };

        // By default template has a boxed layout
        main.layoutType = localStorage.getItem('ma-layout-status');

        // For Mainmenu Active Class
        main.$state = $state;

        //Close sidebar on click
        main.sidebarStat = function (event) {
            if (!angular.element(event.target).parent().hasClass('active')) {
                main.sidebarToggle.left = false;
            }
        };

        activate();

        ////////////////

        function activate() {}
    }
})();
