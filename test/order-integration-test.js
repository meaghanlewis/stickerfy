const Cart = require('../models/cart');
const Product = require('../models/product');

let cart;
let product;
let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);

var assert = require('assert');
describe('Shopping cart', function() {

  describe('test suite', () => {

    beforeEach(() => {
      cart = new Cart({});
      product = new Product({});
      cart.add(product, product.id);
    });

    it('should checkout an order', function() {
      chai.request(server)
      .get('/checkout')
      .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
      done();
    });
  });

});

});
