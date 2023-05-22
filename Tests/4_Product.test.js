import AllureReporter from '@wdio/allure-reporter';
import { expect } from 'chai';
import { datosProduct } from '../Datos/datosProduct.json';
import HomePage from '../pages/home.page';
import ProductPage from '../pages/product.page';

describe('Madison Island', () => {
  before('Debería ingresar a la pagina Madison Island', async () => {
    await HomePage.open('/');
  });
  it('Debería buscar PARK AVENUE e ingresar a el producto', async () => {
    AllureReporter.addStep('Se busca el producto "Park Avenue" y se cliquea');
    await HomePage.search.setValue(datosProduct.productOne);
    await HomePage.search.keys('Enter');
    await ProductPage.product.click();
    expect(
      await ProductPage.titleProductOne.getText(),
      'Park Avenue Pleat Front Trousers'
    );
  });
});
