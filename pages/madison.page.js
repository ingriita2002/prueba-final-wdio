class MadisonPage{
    /**
 * @param {string} ruta
 */

    async abrir(ruta) {
        await browser.url(`${ruta}`);
    }
}
export default new MadisonPage();