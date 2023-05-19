import BasePage from './base.page';
import AllureReporter from '@wdio/allure-reporter';

class HomePage extends BasePage {
  get Language() {
    return $('#select-language');
  }
  get germanBtn() {
    return $(`//option[contains(text(),"German")]`);
  }
  /**
   *
   * Clickea sobre la moneda elegida
   * @param {String} languageBtn
   */
  async languageSelector(languageBtn) {
    AllureReporter.addStep(`Selects German`);
    await languageBtn.click();
  }
}

export default new HomePage();
