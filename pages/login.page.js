import BasePage from './base.page';

class LoginPage extends BasePage {
  get mailLogin() {
    return $('#email');
  }
  get passwordLogin() {
    return $('#pass');
  }
  get titleLogin() {
    return $('h1=Login or Create an Account');
  }
  get buttonLogin() {
    return $('[title="Login"]');
  }
  get already() {
    return $('h2=Already registered?');
  }
  /**
   * Esperar a que inicie sesion
   * @param {String} email
   * @param {String} pass
   */
  async loginUser(email, pass) {
    await this.mailLogin.setValue(email);
    await this.passwordLogin.setValue(pass);
    await this.clickElement(this.buttonLogin);
  }
}
export default new LoginPage();
