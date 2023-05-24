import AllureReporter from '@wdio/allure-reporter';
import { expect } from 'chai';
import { datosProduct } from '../Datos/datosProduct.json';
import HomePage from '../pages/home.page';
import ProductPage from '../pages/product.page';

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
      'Error: No se encuentra el producto'
    ).to.equal('CORE STRIPED SPORT SHIRT');
  });
  it('Debería agregar el producto a MyCart', async () => {
    AllureReporter.addStep(
      'Se elige el color y el talle, y cliquea en Add to Cart'
    );
    await ProductPage.color.click();
    await ProductPage.color.selectByIndex(1);
    await ProductPage.size.click();
    await ProductPage.size.selectByIndex(1);
    await ProductPage.addToCart.click();
    expect(
      await ProductPage.titleTwo.getText(),
      'No se encuentra el carrito'
    ).to.equal('SHOPPING CART');
  });
});
