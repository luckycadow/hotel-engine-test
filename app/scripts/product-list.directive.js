(function () {
    'use strict';

    angular
        .module('HETest')
        .directive('productList', productList);

    /* @ngInject */
    function productList() {
        var directive = {
            bindToController: true,
            controller: ProductListController,
            templateUrl: 'app/templates/product-list.html',
            controllerAs: 'vm',
            restrict: 'E',
            scope: {}
        };
        return directive;
    }

    /* @ngInject */
    function ProductListController(productService, cartService) {
        var vm = this;

        vm.addToCart = addToCart;
        vm.products = productService.get();

        function addToCart(product, quantity) {
            cartService.add(product, quantity);
        }
    }

})();

