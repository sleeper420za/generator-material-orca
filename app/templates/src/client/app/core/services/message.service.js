(function () {
    'use strict';

    angular
        .module('app.core')
        .service('MessageService', MessageService);

    MessageService.$inject = ['$resource'];

    /* @ngInject */
    function MessageService($resource) {
        this.getMessage = function (img, user, text) {
            var gmList = $resource('data/messages-notifications.json');

            return gmList.get({
                img: img,
                user: user,
                text: text
            });
        };
    }
})();
