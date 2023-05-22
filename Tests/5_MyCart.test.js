import AllureReporter from '@wdio/allure-reporter';
import { expect } from 'chai';
import { datosProduct } from '../Datos/datosProduct.json';
import HomePage from '../pages/home.page';
import ProductPage from '../pages/product.page';
import productPage from '../pages/product.page';

describe('Madison Island', () => {
  before('Debería ingresar a la pagina Madison Island', async () => {
    await HomePage.open('/');
  });
  it('Debería buscar el producto a comprar e ingresar a el mismo', async () => {
    AllureReporter.addStep(
      'Se busca el producto "Core Striped Sport Shirt" y se cliquea'
    );
    await HomePage.search.setValue(datosProduct.productTwo);
    await HomePage.search.keys('Enter');
    await ProductPage.product.click();
    expect(
      await ProductPage.titleProductTwo.getText(),
      'Core Striped Sport Shirt'
    );
  });
  it('Debería agregar el producto a MyCart', async () => {
    AllureReporter.addStep(
      'Se elige el color y el talle, y cliquea en Add to Cart'
    );
    await ProductPage.color.click();
    await productPage.color.selectByIndex(1);
    await ProductPage.size.click();
    await productPage.size.selectByIndex(1);
    await browser.pause(2000);
    await ProductPage.addToCart.click();
    expect(await ProductPage.titleProductTwo.getText(), 'Shoping Cart');
  });
});
