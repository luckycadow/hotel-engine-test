(function () {
    'use strict';

    angular
        .module('HETest')
        .controller('ShippingModalController', ShippingModalController);

    /* @ngInject */
    function ShippingModalController(shippingOptions) {

        this.shippingOptions = shippingOptions;

    }

})();

