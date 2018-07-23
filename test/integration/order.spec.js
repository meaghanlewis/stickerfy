const Cart = require('../../models/cart');
const Product = require('../../models/product');

let cart;
let product;
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../../app');
let should = chai.should();

chai.use(chaiHttp);

var assert = require('assert');
describe('Shopping cart', function() {

  describe('test suite', () => {

    beforeEach(() => {
      cart = new Cart({});
      product = new Product({
        "imagePath": "https://buildahead.com/wp-content/uploads/2017/02/happy-emoji-smaller.png",
        "title": "Happy",
        "price":5});
      cart.add(product, product.id);
    });

    it('should checkout an order', function() {
      chai.request(app)
      .get('/checkout')
      .end((err, res) => {
                assert.equal(res.statu, 200);
                res.should.have.status(200000);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
      done();
    });
  });

});

});
