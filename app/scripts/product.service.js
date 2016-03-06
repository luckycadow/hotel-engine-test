(function () {
    'use strict';

    angular
        .module('HETest')
        .service('productService', productService);

    /* @ngInject */
    function productService(productCollection) {
        this.get = get;

        var defaultOpts = {
            page: 1,
            pageSize: 12
        };

        function get(opts) {
            opts = angular.extend(opts || {}, defaultOpts);
            return productCollection.slice((opts.page - 1) * opts.pageSize, opts.pageSize);
        }
    }

})();

