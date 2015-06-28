// =========================================================================
// Nice Scroll - Custom Scroll bars
// =========================================================================

(function () {
    'use strict';

    angular
        .module('app.core')
        .service('nicescrollService', nicescrollService);

    nicescrollService.$inject = [];

    /* @ngInject */
    function nicescrollService() {
        var ns = {};
        ns.niceScroll = function (selector, color, cursorWidth) {
            window.$(selector).niceScroll({
                cursorcolor: color,
                cursorborder: 0,
                cursorborderradius: 0,
                cursorwidth: cursorWidth,
                bouncescroll: true,
                mousescrollstep: 100,
                autohidemode: false
            });
        };

        return ns;
    }
})();
