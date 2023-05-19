import HomePage from '../pages/homePage';
import { expect } from 'chai';
import AllureReporter from '@wdio/allure-reporter';

describe('Madison Island', () => {
  before('Deberia ingresar a la pagina Madison Island', async () => {
    await HomePage.open('/');
  });
  it('Debería cambiar el idioma de la pagina', async () => {
    AllureReporter.addStep(
      'Se cliquea el desplegable Language y luego el Idioma alemán'
    );
    await HomePage.Language.click();
    await HomePage.languageSelector(HomePage.germanBtn);
    expect(await HomePage.germanBtn.getText()).to.be.equal('German');
  });
});
