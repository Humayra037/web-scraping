const { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver'); // Import the Chrome WebDriver

(async function () {
  const driver = new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://www.amazon.com/best-sellers-books-Amazon/zgbs/books/ref=zg_bs_nav_books_0');

    const productTitles = [];
    const titleElements = await driver.findElements(By.css('a.a-link-normal'));
    
    // Extract product titles
    for (let i = 0; i < 100; i++) {
      const title = await titleElements[i].getText();
      productTitles.push(title);
    }

    // Display the product titles
    for (let i = 0; i < 100; i++) {

      
      console.log(productTitles[i]);
    }
  } finally {

    await driver.quit();
  }
}
)
();
