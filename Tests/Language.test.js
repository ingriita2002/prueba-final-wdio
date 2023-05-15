import LanguagePage from "../pages/language.page";

describe('Madison Island', () => {
    it('Deberia ingresar a la pagina Madison Island', async () => {
        await LanguagePage.open('/');
    })
    it('Debería cambiar el idioma de la pagina', async () => {
        await LanguagePage.clickElement(LanguagePage.Idioma);
        await LanguagePage.German;
        await LanguagePage.French;
        await LanguagePage.English;

        await browser.pause(2000);
    })
});