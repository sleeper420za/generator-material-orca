(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('RecentPostController', RecentPostController);

    RecentPostController.$inject = ['RecentPostService'];

    /* @ngInject */
    function RecentPostController(RecentPostService) {
        //Get Recent Posts Widget Items
        this.img = RecentPostService.img;
        this.user = RecentPostService.user;
        this.text = RecentPostService.text;

        this.rpResult = RecentPostService.getRecentpost(this.img, this.user, this.text);
        activate();

        ////////////////

        function activate() {}
    }
})();
