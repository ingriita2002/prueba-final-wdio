 //Primer test prueba final
describe('Madison Island', () => {
    it('Debería ir a Register', async () => {
        browser.url('/');
        let account = await $('=ACCOUNT');
        await account.click();
        let title = await $('=Register');
        await title.click();
        await browser.pause(2000);
    });
    it('Debería ingresar credenciales válidas', async () => {
        const firstname = await $('[title="First Name"]');
        await firstname.setValue('Susana');
        const lastname = await $('[title="Last Name"]');
        await lastname.setValue('Rosas');
        const email = await $('[title="Email Address"]');
        await email.setValue('susana-garcia@gmail.com');
        const pass = await $('[title="Password"]');
        await pass.setValue('lolamila234');
        const passconfirm = await $('[title="Confirm Password"]');
        await passconfirm.setValue('lolamila234');
    });
    it('Debería registrarse', async () => {
        const register = await $('[title="Register"]');
        await register.keys('Enter');
        await browser.pause(2000);
    })
    it('Deberia Des-logearse', async () => {
        let account = await $('=ACCOUNT');
        await account.click();
        const logout = await $('=Log Out')
        await logout.click();
    })
});

 //Segundo test prueba final
describe('Madison Island', () => {
    it('Debería ir a Log in', async () => {
        browser.url('/');
        let account = await $('=ACCOUNT');
        await account.click();
        let title = await $('=Log In');
        await title.click();
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
        browser.url('/');
        const barraDeBusqueda = await $('[name="q"]');
        await barraDeBusqueda.setValue('Park avenue');
        await barraDeBusqueda.keys('Enter');
        const button = await $('[title="View Details"]');
        await button.click();
        await browser.pause(2000);
    });
}); 


//Cuarto tests prueba final
describe('Madison Island', () => {
    it('Debería ingresar a el producto a comprar', async () => {
    browser.url('/');
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
    browser.url('/');
    const dropDownLanguage = await $('#select-language');
    await dropDownLanguage.selectByIndex(2);
    await dropDownLanguage.selectByIndex(1);
    await dropDownLanguage.selectByIndex(0);
    await browser.pause(2000);
    });
}); 
