(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('avatarGenerator', avatarGenerator);

    avatarGenerator.$inject = [];

    /* @ngInject */
    function avatarGenerator() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {

                var name = attrs.avatarGenerator;
                var nameSplit = name.split(' ');
                var initials = nameSplit[0].charAt(0).toUpperCase() + nameSplit[1].charAt(0).toUpperCase();

                var canvas = element.context;
                var context = canvas.getContext('2d');

                var canvasWidth = window.$(element).attr('width'),
                    canvasHeight = window.$(element).attr('height'),
                    canvasCssWidth = canvasWidth,
                    canvasCssHeight = canvasHeight;

                if (window.devicePixelRatio) {
                    window.$(element).attr('width', canvasWidth * window.devicePixelRatio);
                    window.$(element).attr('height', canvasHeight * window.devicePixelRatio);
                    window.$(element).css('width', canvasCssWidth);
                    window.$(element).css('height', canvasCssHeight);
                    context.scale(window.devicePixelRatio, window.devicePixelRatio);
                }

                context.fillStyle = attrs.backgroundColor;
                context.fillRect (0, 0, canvas.width, canvas.height);
                context.font = attrs.fontSize + ' Roboto';
                context.textAlign = 'center';
                context.fillStyle = attrs.color;
                context.fillText(initials, canvasCssWidth / 2, canvasCssHeight / 1.5);

            }
        };
    }
})();
