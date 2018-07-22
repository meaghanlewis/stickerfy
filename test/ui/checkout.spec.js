module.exports = {
  'Test checkout workflow' : function (browser) {
    browser
      .url('https://stickerfy.herokuapp.com/')
      .waitForElementVisible('body', 1000)
      .click('.btn-success')
      .click('#cart')
      .waitForElementVisible('#products', 1000)
      .click('#checkout')
      .assert.containsText('#total', 'Total: $9')
      .end();
  }
};
