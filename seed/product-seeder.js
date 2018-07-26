var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', { useMongoClient: true });

var products = [
  new Product({
    imagePath: 'https://buildahead.com/wp-content/uploads/2017/02/happy-emoji-smaller.png',
    title: 'Happy',
    description: "Happy sticker!",
    price: 5.5
  }),
  new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Very_Angry_Emoji_7f7bb8df-d9dc-4cda-b79f-5453e764d4ea_large.png?v=1480481058',
    title: 'Angry',
    description: "Angry sticker",
    price: 4.5
  }),
  new Product({
    imagePath: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Sad_Emoji_large.png?v=1513251055',
    title: 'Sad',
    description: "Sad sticker",
    price: 7
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
