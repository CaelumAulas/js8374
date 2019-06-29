class CakeEnderecoInvalidoError extends Error {
    constructor(endereco){
        super('CakeEnderecoInvalidoError')
        this.endereco = endereco
        this.message = `Não consegui entender o endereço: \n\n${endereco} `
    }

    toString() {
        return `${this.message}\n\n${this.stack}`
    }
}

export { CakeEnderecoInvalidoError }