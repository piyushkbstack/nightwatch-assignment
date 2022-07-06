  module.exports = {
    "Nightwatch Assignment": async function (browser) {
      browser.windowMaximize()
      browser.url('https://www.browserstack.com/');
    

      browser.useXpath().click('//span[contains(text(),"Developers")]')

      browser.useXpath().click('//ul[@id="developers-menu-dropdown"]//*[@title="Documentation"]')
  const websiteTestProducts = ["Selenium", "Cypress", "Playwright", "Puppeteer", "JS Testing API", "Percy", "Live"]
  browser.elements('xpath', '//h2[contains(text(),"Test your websites")]/following-sibling::div[1]//div[@class="product-container--content"]//span', function(result){
      els = result.value
      var i = 0
      els.forEach(function(el){
        let elementID = el[Object.keys(el)[0]]
          browser.elementIdText(elementID, function(text) {
            browser.assert.equal(text.value, websiteTestProducts[i])
            i++;
                });
          });
    });

  const mobileTestProducts = ["Appium", "Espresso", "XCUITest", "EarlGrey", "App Live"]
  browser.elements('xpath', '//h2[contains(text(),"Test your mobile apps")]/following-sibling::div[1]//div[@class="product-container--content"]//span', function(result){
      els = result.value
      var i = 0
      els.forEach(function(el){
        let elementID = el[Object.keys(el)[0]]
          browser.elementIdText(elementID, function(text) {
            browser.assert.equal(text.value, mobileTestProducts[i])
            i++;
                });
          });
    });

  const smartTVTestProducts = ["Appium"]
  browser.elements('xpath', '//h2[contains(text(),"Test your Smart TV apps")]/following-sibling::div[1]//div[@class="product-container--content"]//span', function(result){
      els = result.value
      var i = 0
      els.forEach(function(el){
        let elementID = el[Object.keys(el)[0]]
          browser.elementIdText(elementID, function(text) {
            browser.assert.equal(text.value, smartTVTestProducts[i])
            i++;
                });
          });
    });

    browser.useXpath().click('//div[@class="product-container--content"]//*[@title="Selenium"]')

    browser.useXpath().click('//a[text()="Nightwatch"]')
    browser.elements('xpath', '//h2[@id="prerequisites"]//preceding-sibling::ol//li', function(result){
      els = result.value
      browser.assert.equal(els.length, 4)
    });
    }
  };
