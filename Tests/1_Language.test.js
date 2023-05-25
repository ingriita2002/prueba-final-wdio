import HomePage from '../pages/home.page';
import { expect } from 'chai';
import AllureReporter from '@wdio/allure-reporter';

describe('Madison Island', () => {
  before('Deberia ingresar a la pagina Madison Island', async () => {
    await HomePage.open('/');
  });
  it('Debería cambiar el idioma de la pagina', async () => {
    AllureReporter.addStep('Se cliquea el desplegable Language');
    await HomePage.Language.click();
    AllureReporter.addStep('Se cliquea el idioma German');
    await HomePage.germanBtn.click();
    expect(
      await HomePage.germanBtn.getText(),
      'Error: El el idioma aleman no se encuentra'
    ).to.equal('German');
    expect(
      await browser.checkElement(
        await $('#select-language'),
        'Foto-boton-German',
        {}
      ),
      'Error: El idioma no cambio'
    ).equal(0);
  });
});
