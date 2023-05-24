const PAGE_TIMEOUT = 5000;

export default class BasePage {
  /**
   * Open web
   * @param {String} route
   */
  async open(route) {
    await browser.url(`${route}`);
  }

  /**
   * Wait for clickable and click
   * @param {Object} element
   */
  async clickElement(element) {
    await element.waitForClickable({ timeout: PAGE_TIMEOUT });
    await element.click();
  }
}
