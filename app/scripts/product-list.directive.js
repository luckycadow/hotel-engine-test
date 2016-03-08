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
        vm.getProducts = getProducts;
        vm.productCount = productService.productCount;
        vm.pageNumber = 1;
        vm.pageSize = 12;
        vm.products = productService.get();

        function addToCart(product, quantity) {
            cartService.add(product, quantity);
        }

        function getProducts() {
            vm.products = productService.get({ page: vm.pageNumber, pageSize: vm.pageSize });
        }
    }

})();

