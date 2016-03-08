(function () {
    'use strict';

    angular
        .module('HETest')
        .service('productService', productService);

    /* @ngInject */
    function productService(productCollection) {
        this.get = get;
        this.productCount = productCollection.length;

        var defaultOpts = {
            page: 1,
            pageSize: 12
        };

        function get(opts) {
            opts = angular.extend({}, defaultOpts, opts || {});
            var start = (opts.page - 1) * opts.pageSize;
            var end = start + opts.pageSize;
            return productCollection.slice(start, end);
        }
    }

})();

