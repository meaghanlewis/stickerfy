const Cart = require('../../models/cart');
const Product = require('../../models/product');

let cart;
let product;
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Shopping cart', () => {

  describe('order test suite', () => {

    beforeEach(() => {
      cart = new Cart({});
      product = new Product({
        "imagePath": "https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Happy_large.png?v=1571606093",
        "title": "Happy",
        "price":5});
    });


    it('completes an order', (done) => {
      chai.request(app)
      .get('/checkout')
      .end((err, res) => {
        res.should.have.status(200);
      done();
    });
  });

});

});
