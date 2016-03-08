(function () {
    'use strict';

    angular
        .module('HETest')
        .service('cartService', cartService);

    /* @ngInject */
    function cartService() {
        var self = this;

        self.add = add;
        self.remove = remove;
        self.getSubtotal = getSubtotal;
        self.getTotal = getTotal;
        self.items = [];
        self.shipping = 0;

        function add(product, quantity) {
            // Create a new instance with quantity extending the product.  This keeps any modification in
            // the cart from affecting the original instance of the product.
            var cartItem  = angular.extend({ quantity: quantity || 1 }, product);

            // Check for existing item with id and update quantity instead of adding if found
            for(var i = 0; i< self.items.length; i++) {
                if (self.items[i].id === cartItem.id) {
                    self.items[i].quantity += cartItem.quantity;
                    return;
                }
            }

            // Add the product if we didn't handle an update in the loop
            // Unshift instead of push to keep recently added items at the top of the list
            self.items.unshift(cartItem);
        }

        function remove(cartItem) {
            self.items = self.items.filter(function(item) {
               return item.id !== cartItem.id;
            });
        }

        function getSubtotal() {
            return self.items.reduce(function(runningTotal, item) {
                return runningTotal + (item.price * item.quantity);
            }, 0);
        }

        function getTotal() {
            return getSubtotal() + self.shipping;
        }
    }

})();

