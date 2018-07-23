const assert = require('assert');
const {Builder, By, Key, until} = require('selenium-webdriver');

describe('Checkout workflow', function() {
  let driver;

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  it('adds a sticker to the cart and checkout', async function() {
    await driver.get('http://localhost:3000');
    await driver.wait(until.titleIs('Stickerfy'), 5000);
    await driver.findElement(By.className('btn-success')).click();
    await driver.findElement(By.id('cart')).click();
    await driver.findElement(By.id('checkout')).click();
    await driver.wait(until.urlIs('http://localhost:3000/checkout'), 5000);

    let total = await driver.findElement(By.id('total'));
    assert.equal(await total.getText(), 'Total: $4');
    });
    after(() => driver && driver.quit());
});
