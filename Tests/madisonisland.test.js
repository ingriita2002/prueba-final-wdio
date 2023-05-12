 import MadisonPage from "../pages/madison.page";
 import Busqueda from "../pages/busqueda.page";
import credenciales from "../pages/credenciales";

 //Primer test prueba final
describe('Madison Island', () => {
    it('Debería ir a Register', async () => {
       await MadisonPage.abrir('/');
       await Busqueda.account.click()
       await Busqueda.register.click()
        await browser.pause(2000);
    });
    it('Debería ingresar credenciales válidas', async () => {
        await Busqueda.name.setValue(credenciales.firstName);
        await Busqueda.lastname.setValue(credenciales.lastName);
        await Busqueda.mail.setValue(credenciales.email);
        const pass = await $('[title="Password"]');
        await pass.setValue('perezsofi555');
        const passconfirm = await $('[title="Confirm Password"]');
        await passconfirm.setValue('perezsofi555');
    });
    it('Debería registrarse', async () => {
        await Busqueda.buttonRegister.keys('Enter');
        await browser.pause(2000);
    })
    it('Deberia Des-logearse', async () => {
        let account = await $('=ACCOUNT');
        await account.click();
        const logout = await $('=Log Out')
        await logout.click();
    })
});

/*
 //Segundo test prueba final
describe('Madison Island', () => {
    it('Debería ir a Log in', async () => {
         await MadisonPage.abrir('/');
        let account = await $('=ACCOUNT');
        await account.click();
        await Busqueda.login.click()
        await browser.pause(2000);
    });
    it('Debería ingresar credenciales válidas e iniciar sesion', async () => {
        const email = await $('#email');
        await email.setValue('susana-garcia@gmail.com');
        const contraseña = await $('#pass');
        await contraseña.setValue('lolamila234');
        const login = await $('[title="Login"]');
        await login.click();
        await browser.pause(2000);
    });
});
  

  //Tercer test prueba final
describe('Madison Island', () => {
    it('Debería buscar PARK AVENUE y seleccionar el producto', async () => {
         await MadisonPage.abrir('/');
        const barraDeBusqueda = await $('[name="q"]');
        await barraDeBusqueda.setValue('Park avenue');
        await barraDeBusqueda.keys('Enter');
        const button = await $('[title="View Details"]');
        await button.click();
        await browser.pause(2000);
    });
}); 


//Cuarto tests prueba final busqueda con PageObject y assertions
describe('Madison Island', () => {
    it('Debería ingresar a el producto a comprar', async () => {
     await MadisonPage.abrir('/');
    const search = await $('[name="q"]');
    await search.setValue('Park avenue');
    await search.keys('Enter');
    const button = await $('[title="View Details"]');
    await button.click();
    });
    it('Debería agregar el producto a My Cart', async () => {
    const color = await $('#attribute92');
    await color.selectByIndex(1);
    const size = await $('#attribute180')
    await size.selectByIndex(1);
    const addCart = await $('[title="Add to Cart"]')
    await addCart.click();
    await browser.pause(2000);
    });
});

  //Quinto test prueba final
  describe('Madison Island', () => {
    it('Debería cambiar el idioma de la página', async () => {
     await MadisonPage.abrir('/');
    const dropDownLanguage = await $('#select-language');
    await dropDownLanguage.selectByIndex(2);
    await dropDownLanguage.selectByIndex(1);
    await dropDownLanguage.selectByIndex(0);
    await browser.pause(2000);
    });
}); 
*/