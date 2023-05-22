class RegisterPage {
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
}
export default new RegisterPage();
