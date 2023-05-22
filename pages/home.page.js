import BasePage from './base.page';

class HomePage extends BasePage {
  get Language() {
    return $('#select-language');
  }
  get germanBtn() {
    return $(`//option[contains(text(),"German")]`);
  }
  get account() {
    return $('=ACCOUNT');
  }
  get register() {
    return $('=Register');
  }
  get logout() {
    return $('=Log Out');
  }
  get login() {
    return $('=Log In');
  }
  get home() {
    return $('.welcome-msg');
  }
  get search() {
    return $('#search');
  }
}

export default new HomePage();
