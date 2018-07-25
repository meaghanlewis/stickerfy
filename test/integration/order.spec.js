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
        "imagePath": "https://buildahead.com/wp-content/uploads/2017/02/happy-emoji-smaller.png",
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
