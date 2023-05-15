const PAGE_TIMEOUT = 5000

export default class BasePage {


   /**
    * Open web
    * @param {String} route 
    */
   async open(route)  {
       await browser.url(`${route}`);
   }


   /**
    * Wait for clickable and click
    * @param {Object} element 
    */
   async clickElement(element) {
       await element.waitForClickable({ timeout: PAGE_TIMEOUT });
       await element.click();
   }


   /**
    * Send text from an element to another 
    * @param {Object} element receive text
    * @param {String} text sends text
    */
   async emptyFieldAndSendText(element, text){
       await element.waitForClickable({ timeout: PAGE_TIMEOUT });
       await element.clearValue();
       await element.click();
       await element.keys(text);
   }
}