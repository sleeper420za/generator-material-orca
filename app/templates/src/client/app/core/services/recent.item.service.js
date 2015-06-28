(function () {
    'use strict';

    angular
        .module('app.core')
        .service('RecentItemService', RecentItemService);

    RecentItemService.$inject = ['$resource'];

    /* @ngInject */
    function RecentItemService($resource) {
        this.getRecentitem = function (id, name, price) {
            var recentitemList = $resource('data/recent-items.json');

            return recentitemList.get({
                id: id,
                name: name,
                price: price
            });
        };
    }
})();
