(function () {
    'use strict';

    angular
        .module('HETest')
        .directive('cart', cart);

    /* @ngInject */
    function cart() {
        var directive = {
            bindToController: true,
            controller: CartController,
            templateUrl: '/app/templates/cart.html',
            controllerAs: 'vm',
            restrict: 'E',
            scope: {}
        };
        return directive;
    }

    /* @ngInject */
    function CartController(cartService) {
        this.getItems = getItems;
        this.remove = remove;
        this.getSubtotal = getSubtotal;
        this.getTotal = getTotal;

        function remove(product) {
            cartService.remove(product);
        }

        function getSubtotal() {
            return cartService.getSubtotal();
        }

        function getTotal() {
            return cartService.getTotal();
        }

        function getItems() {
            return cartService.items;
        }
    }

})();

