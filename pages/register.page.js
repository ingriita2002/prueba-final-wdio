import BasePage from './base.page';

class RegisterPage extends BasePage {
  get namee() {
    return $('#firstname');
  }
  get lastname() {
    return $('#lastname');
  }
  get mailRegister() {
    return $('#email_address');
  }
  get passwordRegister() {
    return $('#password');
  }
  get passConfirm() {
    return $('#confirmation');
  }
  get buttonRegister() {
    return $('[title="Register"]');
  }
  get titleRegister() {
    return $('h1=Create an Account');
  }
  get registerComplete() {
    return $('h1=My Dashboard');
  }
  get logoutComplete() {
    return $('h1=You are now logged out');
  }
  /**
   * Esperar a que inicie sesion
   * @param {String} firstname
   * @param {String} lastname
   * @param {String} email
   * @param {String} pass
   */
  async registerUser(firstname, lastname, email, pass) {
    await this.namee.setValue(firstname);
    await this.lastname.setValue(lastname);
    await this.mailRegister.setValue(email);
    await this.passwordRegister.setValue(pass);
    await this.passConfirm.setValue(pass);
    await this.buttonRegister.keys('Enter');
  }
}
export default new RegisterPage();
