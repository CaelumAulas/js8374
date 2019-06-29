function CakeEnderecoInvalidoError(endereco){
    if(
        this === undefined || 
        (this !== undefined && !(this instanceof CakeEnderecoInvalidoError))
    ) {
        return new CakeEnderecoInvalidoError(endereco)
    }


    const erro = new Error('CakeEnderecoInvalidoError')
    this.stack = erro.stack
    this.endereco = endereco
    this.message = `Não consegui entender o endereço: \n\n${endereco} `
}

CakeEnderecoInvalidoError.prototype = Error.prototype
CakeEnderecoInvalidoError.prototype.toString = function() {
    return `${this.message}\n\n${this.stack}`
}

export { CakeEnderecoInvalidoError }