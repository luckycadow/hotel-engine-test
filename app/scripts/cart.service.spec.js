'use strict';

describe('cart service', function() {
    beforeEach(module('HETest'));

    it('should create new item instances to store internally', inject(function(cartService) {
        var product = { id: 1, name: 'Test Product' };
        cartService.add(product);
        expect(cartService.items).not.toContain(product);
    }));

    it('should add new products to top of items array', inject(function(cartService) {
        cartService.add({ id: 1, name: 'Test Product' });
        cartService.add({ id: 2, name: 'Test Product 2' });
        expect(cartService.items[0].id).toEqual(2);
    }));

    it('should include shipping cost in generated total', inject(function(cartService) {
        cartService.shippingOption = { cost: 10 };
        expect(cartService.getTotal()).toEqual(10);
    }));

    it('should not include shipping cost in generated subtotal', inject(function(cartService) {
        cartService.shippingOption = { cost: 10 };
        expect(cartService.getSubtotal()).toEqual(0);
    }));

    it('should remove an item when you ask it to', inject(function(cartService) {
        var product = { id: 1, name: 'Test Product' };
        cartService.add(product);
        expect(cartService.items.length).toEqual(1);
        cartService.remove(product);
        expect(cartService.items.length).toEqual(0);
    }));
});
