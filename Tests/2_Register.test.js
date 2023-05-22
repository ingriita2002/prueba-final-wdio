import AllureReporter from '@wdio/allure-reporter';
import { expect } from 'chai';
import { datosUser } from '../Datos/datosRegister.json';
import HomePage from '../pages/home.page';
import registerPage from '../pages/register.page';

describe('Madison Island', () => {
  before('Deberia ingresar a la pagina Madison Island', async () => {
    await HomePage.open('/');
  });
  it('Debería redirigirse a Register, ingresar los datos del usuario y registrarse', async () => {
    AllureReporter.addStep(
      'Se cliquea el desplegable Account y luego la opción Register'
    );
    await HomePage.account.click();
    await HomePage.register.click();

    AllureReporter.addStep(
      'Se completa el formulario con datos del usuario y se registra'
    );
    expect(await registerPage.titleRegister.getText(), 'Create an Account');
    await registerPage.namee.setValue(datosUser.firstName);
    await registerPage.lastname.setValue(datosUser.lastName);
    await registerPage.mailRegister.setValue(datosUser.email);
    await registerPage.passwordRegister.setValue(datosUser.password);
    await registerPage.passConfirm.setValue(datosUser.password);
    await registerPage.buttonRegister.keys('Enter');
    expect(await registerPage.registerComplete.getText(), 'My Dashboard');
  });
  it('Deberia des-loguearse', async () => {
    AllureReporter.addStep('Se desloguea de la pagina');
    await HomePage.account.click();
    await HomePage.logout.click();
    expect(
      await registerPage.logoutComplete.getText(),
      'You are now logged out'
    );
  });
});
