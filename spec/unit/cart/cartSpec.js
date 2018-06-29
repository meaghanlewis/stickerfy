const Cart = require('../../models/cart');
const Product = require('../../models/product');

let cart;
let product;

describe('Cart test suite', () => {

  beforeEach(() => {
    cart = new Cart({});
  });

  it('should return empty array', () => {
    expect(cart.generateArray()).toEqual([]);
  });

  it ('should add two numbers', () => {
    expect(cart.add(1,1)).toEqual(1);
  });

  it ('should add two numbers', () => {
    expect(cart.reduceByOne(1,1)).toEqual(1);
  });

  it ('should add two numbers', () => {
    expect(cart.removeItem(1,1)).toEqual(1);
  });

});
