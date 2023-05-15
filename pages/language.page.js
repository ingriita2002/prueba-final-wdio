import BasePage from "./base.page";

class LanguagePage extends BasePage{
get Idioma (){
    return $('#select-language') 
}
get German (){
    return this.Idioma.selectByIndex(2)
}
get French (){
    return this.Idioma.selectByIndex(1)
}
get English (){
    return this.Idioma.selectByIndex(0)
}
}

export default new LanguagePage();