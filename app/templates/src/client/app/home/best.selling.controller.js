(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('BestsellingCtrl', BestsellingCtrl);

    BestsellingCtrl.$inject = ['BestsellingService'];

    /* @ngInject */
    function BestsellingCtrl(BestsellingService) {

        // Get Best Selling widget Data
        this.img = BestsellingService.img;
        this.name = BestsellingService.name;
        this.range = BestsellingService.range;

        this.bsResult = BestsellingService.getBestselling(this.img, this.name, this.range);

        activate();

        ////////////////

        function activate() {}
    }
})();
