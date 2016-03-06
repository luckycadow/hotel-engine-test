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
        self.items = [];
        self.shipping = 0;

        function add(product) {
            self.items.push(product);
        }

        function remove(product) {
            self.items = self.items.filter(function(item) {
               return item.id !== product.id;
            });
        }

        function getSubtotal() {
            return self.items.reduce(function(runningTotal, item) {
                return runningTotal + (item.salePrice * item.quantity);
            }, 0);
        }

        function getTotal() {
            return getSubtotal() + self.shipping;
        }
    }

})();

