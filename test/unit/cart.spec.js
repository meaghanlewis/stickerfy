const Cart = require('../../models/cart');
const Product = require('../../models/product');
const assert = require('assert');

let cart;
let product;

describe('Shopping cart', function() {

  describe('shopping cart model', () => {

    beforeEach(() => {
      cart = new Cart({});
      product = new Product({
        "imagePath": "https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Happy_large.png?v=1571606093",
        "title": "Happy",
        "description": "Happy",
        "price":5});
    });

    it('adds a sticker to the cart', function() {
      cart.add(product, product.id);
      assert.equal(cart.totalPrice, 5);
    });

    it('removes a sticker from the cart', function() {
      cart.add(product, product.id);
      cart.reduceByOne(product.id);
      assert.deepEqual(cart.items, {});
      assert.equal(cart.totalPrice, 0);
    });

    it('remove all quantities of sticker from the cart', function() {
      cart.add(product, product.id);
      cart.add(product, product.id);
      cart.removeItem(product.id);
      assert.deepEqual(cart.items, {});
      assert.equal(cart.totalPrice, 0);
    });

    it('returns an empty array', function() {
      assert.deepEqual(cart.generateArray(),[]);
    });
  });
});
