const assert = require('assert');
const {Builder, By, Key, until} = require('selenium-webdriver');

  describe('Google Search', function() {
    let driver;

    before(async function() {
      driver = await new Builder().forBrowser('chrome').build();
    });

    it('demo', async function() {
      await driver.get('https://www.google.com/ncr');
      await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
      await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
      let url = await driver.getTitle();
      assert.equal(url, 'webdriver - Google Search');
    });
    after(() => driver && driver.quit());
  });
