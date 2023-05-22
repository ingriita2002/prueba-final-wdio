class LoginPage {
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
}
export default new LoginPage();
