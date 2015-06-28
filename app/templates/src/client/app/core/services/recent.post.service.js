(function () {
    'use strict';

    angular
        .module('app.core')
        .service('RecentPostService', RecentPostService);

    RecentPostService.$inject = ['$resource'];

    /* @ngInject */
    function RecentPostService($resource) {
        this.getRecentpost = function (img, user, text) {
            var recentpostList = $resource('data/messages-notifications.json');

            return recentpostList.get({
                img: img,
                user: user,
                text: text
            });
        };
    }
})();
