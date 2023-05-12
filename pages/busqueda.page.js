class Busqueda {
 get account (){
    return $('=ACCOUNT')
 }
get register (){
    return $('=Register')
}
get login (){
return $('=Log In')
}
get name (){
    return $('[title="First Name"]')
}
get lastname (){
    return $('[title="Last Name"]')
}
get mail (){
    return $('[title="Email Address"]')
}
//a partir de aca empieza buttonRegister
get buttonRegister (){
    return $('[title="Register"]')
}
}
export default new Busqueda();