import allure from '@wdio/allure-reporter';
import { expect } from 'chai';

import HomePage from '../pages/home.page';
import RegisterPage from '../pages/register.page';

const usuarios = require('fs');
const datosRegister = JSON.parse(
  usuarios.readFileSync('Datos/datosRegister.json')
);

describe('Madison Island', () => {
  datosRegister.forEach((users) => {
    before('Deberia ingresar a la pagina Madison Island', async () => {
      await HomePage.open('/');
    });
    it('Debería redirigirse a Register, ingresar los datos del usuario y registrarse', async () => {
      allure.addStep(
        'Se cliquea el desplegable Account y luego la opción Register'
      );
      await HomePage.clickElement(HomePage.account);
      await HomePage.clickElement(HomePage.register);
      allure.addStep(
        'Se completa el formulario con datos del usuario y se registra'
      );
      expect(
        await RegisterPage.titleRegister.getText(),
        'Error: Titulo de Register no se encuentra.'
      ).to.equal('CREATE AN ACCOUNT');
      await RegisterPage.registerUser(
        users.firstName,
        users.lastName,
        users.email,
        users.password,
        users.password
      );
      expect(
        await RegisterPage.registerComplete.getText(),
        'Error: Sub-titulo de My Dashboard no se encuentra.'
      ).to.equal('MY DASHBOARD');
    });
    it('Deberia des-loguearse', async () => {
      allure.addStep('Se desloguea de la pagina');
      await HomePage.clickElement(HomePage.account);
      await HomePage.clickElement(HomePage.logout);
      expect(
        await RegisterPage.logoutComplete.getText(),
        'Error: Titulo de Logout no se encuentra'
      ).to.equal('YOU ARE NOW LOGGED OUT');
    });
  });
});
