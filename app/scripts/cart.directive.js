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
            templateUrl: 'app/templates/cart.html',
            controllerAs: 'vm',
            restrict: 'E',
            scope: {}
        };
        return directive;
    }

    /* @ngInject */
    function CartController(cartService, $uibModal) {
        this.getItems = getItems;
        this.remove = remove;
        this.getSubtotal = getSubtotal;
        this.getTotal = getTotal;
        this.getShipping = getShipping;
        this.calculateShipping = calculateShipping;

        function remove(product) {
            cartService.remove(product);
        }

        function getSubtotal() {
            return cartService.getSubtotal();
        }

        function getTotal() {
            return cartService.getTotal();
        }

        function getShipping() {
            return cartService.getShipping();
        }

        function getItems() {
            return cartService.items;
        }

        function calculateShipping() {
            $uibModal.open({
                templateUrl: 'app/templates/shipping-modal.html',
                controller: 'ShippingModalController',
                bindToController: true,
                controllerAs: 'vm',
                size: 'sm',
                resolve: {
                    selectedShipOption: cartService.shippingOption
                }
            }).result.then(function(shippingOption) {
                cartService.shippingOption = shippingOption;
            });
        }
    }

})();

