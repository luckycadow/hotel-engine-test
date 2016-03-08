(function() {
    'use strict';

    angular
        .module('HETest')
        .constant('shippingOptions', [
            { name: 'Standard Shipping', cost: 5 },
            { name: '2 Day Shipping',  cost: 10 },
            { name: 'Next Day Air', cost: 20 },
            { name: 'Drone Bitches!', cost: 100 }
        ]);
})();