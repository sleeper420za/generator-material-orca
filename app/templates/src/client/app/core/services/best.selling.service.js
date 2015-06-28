(function () {
    'use strict';

    angular
        .module('app.core')
        .service('BestsellingService', BestsellingService);

    BestsellingService.$inject = ['$resource'];

    /* @ngInject */
    function BestsellingService($resource) {
        this.getBestselling = function (img, name, range) {
            var gbList = $resource('data/best-selling.json');

            return gbList.get({
                img: img,
                name: name,
                range: range,
            });
        };
    }
})();
