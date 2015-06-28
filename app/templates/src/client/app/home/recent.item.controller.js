(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('RecentItemController', RecentItemController);

    RecentItemController.$inject = ['RecentItemService'];

    /* @ngInject */
    function RecentItemController(RecentItemService) {
        //Get Recent Items Widget Data
        this.id = RecentItemService.id;
        this.name = RecentItemService.name;
        this.parseInt = RecentItemService.price;

        this.riResult = RecentItemService.getRecentitem(this.id, this.name, this.price);
        activate();

        ////////////////

        function activate() {}
    }
})();
