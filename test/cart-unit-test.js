const Cart = require('../models/cart');
const Product = require('../models/product');

let cart;
let product;

var assert = require('assert');
describe('Shopping cart', function() {

  describe('test suite', () => {

    beforeEach(() => {
      cart = new Cart({});
      product = new Product({
        "imagePath": "https://buildahead.com/wp-content/uploads/2017/02/happy-emoji-smaller.png",
        "title": "Happy",
        "description": "laalalaaa",
        "price":5});
    });

    it('should add two numbers', function() {
      cart.add(product, product.id);
      assert.equal(cart.totalPrice, 5);
    });

    it('should remove one', function() {
      cart.add(product, product.id);
      assert.equal(cart.totalPrice, 5);
      cart.reduceByOne(product.id);
      assert.deepEqual(cart.items, {});
      assert.equal(cart.totalPrice, 0);
    });

    it('should remove an item', function() {
      cart.add(product, product.id);
      cart.add(product, product.id);
      assert.equal(cart.totalPrice, 10);
      cart.removeItem(product.id);
      assert.deepEqual(cart.items, {});
      assert.equal(cart.totalPrice, 0);
    });

    it('should return an empty array', function() {
      assert.deepEqual(cart.generateArray(),[]);
    });
  });
});
