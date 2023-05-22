import AllureReporter from '@wdio/allure-reporter';
import { expect } from 'chai';
import { datosUser } from '../Datos/datosRegister.json';
import HomePage from '../pages/home.page';
import LoginPage from '../pages/login.page';

describe('Madison Island', () => {
  before('Deberia ingresar a la pagina Madison Island', async () => {
    await HomePage.open('/');
  });
  it('Debería loguearse', async () => {
    AllureReporter.addStep(
      'Se cliquea el desplegable Account y luego la opción Register'
    );
    await HomePage.account.click();
    await HomePage.login.click();
    expect(await LoginPage.already.getText(), 'Already registered?');
    AllureReporter.addStep(
      'Se escriben las credenciales del usuario y se inicia sesión'
    );
    await LoginPage.mailLogin.setValue(datosUser.email);
    await LoginPage.passwordLogin.setValue(datosUser.password);
    await LoginPage.buttonLogin.keys('Enter');
    expect(await HomePage.home.getText(), 'welcome-msg');
  });
});
