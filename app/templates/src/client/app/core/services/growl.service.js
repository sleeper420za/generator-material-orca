(function () {
    'use strict';

    angular
        .module('app.core')
        .service('GrowlService', GrowlService);

    GrowlService.$inject = [];

    /* @ngInject */
    function GrowlService() {
        var gs = {};
        gs.growl = function (message, type) {
            window.$.growl({
                message: message
            }, {
                type: type,
                /*jshint -W106 */
                allow_dismiss: false,
                label: 'Cancel',
                className: 'btn-xs btn-inverse',
                placement: {
                    from: 'top',
                    align: 'right'
                },
                delay: 2500,
                animate: {
                    enter: 'animated bounceIn',
                    exit: 'animated bounceOut'
                },
                offset: {
                    x: 20,
                    y: 85
                }
            });
        };

        return gs;
    }
})();
