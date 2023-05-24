import AllureReporter from '@wdio/allure-reporter';
import { expect } from 'chai';

import HomePage from '../pages/home.page';
import LoginPage from '../pages/login.page';

const usuarios = require('fs');
const datosLogin = JSON.parse(
  usuarios.readFileSync('Datos/datosRegister.json')
);

describe('Madison Island', () => {
  datosLogin.forEach((users) => {
    before('Deberia ingresar a la pagina Madison Island', async () => {
      await HomePage.open('/');
    });
    it('Debería loguearse', async () => {
      AllureReporter.addStep(
        'Se cliquea el desplegable Account y luego la opción Register'
      );
      await HomePage.clickElement(HomePage.account);
      await HomePage.clickElement(HomePage.login);
      expect(
        await LoginPage.already.getText(),
        'Error: Titulo de Login no se encuentra.'
      ).to.equal('ALREADY REGISTERED?');
      AllureReporter.addStep(
        'Se escriben las credenciales del usuario y se inicia sesión'
      );
      await LoginPage.loginUser(users.email, users.password);
      expect(
        await HomePage.home.getText(),
        'Error: Texto de bienvenida no se encuentra'
      ).to.equal('WELCOME');
    });
  });
});
