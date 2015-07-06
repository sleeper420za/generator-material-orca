//-----------------------------------------------------
// ANIMATED DROPDOWN MENU
//-----------------------------------------------------

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('dropdown', dropdown);

    dropdown.$inject = [];

    /* @ngInject */
    function dropdown() {

        var $animArray;
        var $animation;
        var $animationIn;
        var $animationOut;
        var $animationDuration;

        return {
            restrict: 'C',
            link: function (scope, element, attrs) {
                element.on('shown.bs.dropdown', function (e) {
                    if (window.$(this).data('animation')) {
                        $animArray = [];
                        $animation = attrs.animation;
                        $animArray = $animation.split(',');
                        $animationIn = 'animated ' + $animArray[0];
                        $animationOut = 'animated ' + $animArray[1];
                        $animationDuration = '';

                        if (!$animArray[2]) {
                            $animationDuration = 500; //if duration is not defined, default is set to 500ms
                        } else {
                            $animationDuration = $animArray[2];
                        }

                        window.$(this).find('.dropdown-menu').removeClass($animationOut);
                        window.$(this).find('.dropdown-menu').addClass($animationIn);
                    }
                });

                element.on('hide.bs.dropdown', function (e) {
                    if (window.$(this).data('animation')) {
                        e.preventDefault();
                        var $this = window.$(this);
                        var $dropdownMenu = $this.find('.dropdown-menu');

                        $dropdownMenu.addClass($animationOut);
                        setTimeout(function () {
                            $this.removeClass('open');

                        }, $animationDuration);

                    }
                });
            }
        };
    }
})();
