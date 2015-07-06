// =========================================================================
// UI - ANIMATION
// =========================================================================

(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('animDemo', animDemo);

    animDemo.$inject = ['$timeout'];

    /* @ngInject */
    function animDemo($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.click(function () {
                    var animation = window.$(this).text();
                    var cardImg = window.$(this).closest('.card').find('img');

                    var animationDuration;

                    if (animation === 'hinge') {
                        animationDuration = 2100;
                    } else {
                        animationDuration = 1200;
                    }

                    cardImg.removeAttr('class');
                    cardImg.addClass('animated ' + animation);

                    $timeout(function () {
                        cardImg.removeClass(animation);
                    }, animationDuration);
                });
            }
        };
    }
})();
