(function () {
    'use strict';

    angular
        .module('HETest')
        .service('productService', productService);

    /* @ngInject */
    function productService(productCollection, $filter) {
        this.get = get;
        this.productCount = productCollection.length;
        this.sortOptions = [
            { name: 'Rating', expression: function(item) { return item.customerRating || 0; }, reverse: true },
            { name: 'Lowest Price', expression: 'price', reverse: false },
            { name: 'Highest Price', expression: 'price', reverse: true }
        ];

        var defaultOpts = {
            page: 1,
            pageSize: 12,
            sortOption: this.sortOptions[0],
            term: ''
        };

        function get(opts) {
            opts = angular.extend({}, defaultOpts, opts || {});
            var start = (opts.page - 1) * opts.pageSize;
            var end = start + opts.pageSize;
            var products = productCollection;

            if (opts.term) {
                products = $filter('filter')(products, opts.term);
            }

            var sortedProducts = $filter('orderBy')(products, opts.sortOption.expression, opts.sortOption.reverse);
            return sortedProducts.slice(start, end);
        }

    }

})();

