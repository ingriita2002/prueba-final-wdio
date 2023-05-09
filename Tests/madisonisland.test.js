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
    it('Debería ingresar credenciales válidas y registrarse', async () => {
        const firstname = await $('[title="First Name"]');
        await firstname.setValue('Maria');
        const lastname = await $('[title="Last Name"]');
        await lastname.setValue('Gomez');
        const email = await $('[title="Email Address"]');
        await email.setValue('maria.gomez@gmail.com');
        const pass = await $('[title="Password"]');
        await pass.setValue('maria.soy199');
        const passconfirm = await $('[title="Confirm Password"]');
        await passconfirm.setValue('maria.soy199');
        const register = await $('[title="Register"]');
        await register.click();
        await browser.pause(5000);
    });
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

        const email = await $('[name="login[username]"]');
        await email.setValue('lola.lola@gmail.com');
        const contraseña = await $('[name="login[password]"]');
        await contraseña.setValue('lolalola12345');
        const login = await $('[title="Login"]');
        await login.click();
        await browser.pause(5000);
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
        await browser.pause(5000);
    });
  });