// função construtora // instanceof funciona
//     Nome()
// função factory // larga mão do instanceof
//     createNome()
// Fábrica de objetos
// if(this === undefined) {
//     return new Endereco(endereco)
// }
import {CakeEnderecoInvalidoError} from '/scripts/erros/CakeEnderecoInvalidoErrorClasse.js'


function toString() {
    return this.urlCompleta
}

function Endereco(endereco) {

    if(
        this === undefined || 
        (this !== undefined && !(this instanceof Endereco))
    ) {
        return new Endereco(endereco)
    }

    let enderecoCompleto
    let enderecoResumido

    if(!endereco || endereco ==='blank') {
        enderecoCompleto = 'blank'
        enderecoResumido = 'blank'
    } else {
        if (
            endereco.substring(0, 7) !== 'http://' &&
            endereco.substring(0,8) !== 'https://'
        ) {
            // Assignement Atribuição
            endereco = 'http://' + endereco
        }

        let url
        try {
            url = new URL(endereco)
        } catch(error) {
            const erroCustomizado = new CakeEnderecoInvalidoError(endereco)
            throw erroCustomizado
        }
    
        if(url.hostname === 'localhost') {
            const paginaLocal = url.pathname.replace("/", "")
            enderecoCompleto = paginaLocal
            enderecoResumido = paginaLocal
        } else {
            /* 
              Colocando apenas `enderecoCompleto = url` também funciona
              Pois na hora do type coercing a função toString é chamada
                de qualquer jeito
            */
            enderecoCompleto = url.toString()
            enderecoResumido = url.hostname
        }
    }

    /*
        Quando executa com new
        new é um operador
        modifica o this da sua função

        const this = {
            __proto__: Endereco
        }
    */

    this.urlCompleta = enderecoCompleto
    this.urlResumida = enderecoResumido
    /*
        Quando executa com new
        return this
    */
}

Endereco.prototype = {
    toString: toString
}

export { Endereco }
    