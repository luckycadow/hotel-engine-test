(function () {
    'use strict';

    angular
        .module('HETest')
        .controller('ShippingModalController', ShippingModalController);

    /* @ngInject */
    function ShippingModalController(shippingOptions, selectedShipOption) {
        var vm = this;

        vm.shippingOptions = shippingOptions;
        vm.selectedOption = selectedShipOption;

        vm.confirm = confirm;

        function confirm() {
            vm.$close(vm.selectedOption);
        }
    }

})();

