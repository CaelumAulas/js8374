import { CakeEnderecoInvalidoError } from '/scripts/erros/CakeEnderecoInvalidoErrorClasse.js';

// Função assíncrona
// Padrão antigo de se fazer funções assíncronas
export function verificaEnderecoAntiga(endereco) {

    // ECMA
    return new Promise(function(resolve, reject) {

        // AJAX
        // Pedido de uma pagina
        const xhr = new XMLHttpRequest()

        // Digito o endereco
        // Async
        xhr.open('GET', endereco)
        // Aperto Enter
        // Assíncrono
        xhr.send()

        // Função de callback
        xhr.addEventListener('load', function codigo1 () {
            try {
                // Chamar as funções de callback
            resolve()
            } catch(erro) {
                // Função tratadora de erros
                reject(erro)
            }
        })

        xhr.addEventListener('error', function codigo2 () {
            try {
                const error = new CakeEnderecoInvalidoError(endereco)
                // Função de callback
                reject(error)
            } catch(error) {
                reject(error)
            }
        })
    
    })

}

export function verificaEndereco(endereco) {

    return fetch(endereco)
        .then(function(informacoes) {
            if(informacoes.status === 404) {
                const erro = new CakeEnderecoInvalidoError(endereco)
                throw erro
            }
        })
        .catch(function(error) {
            const erro = new CakeEnderecoInvalidoError(endereco)
            throw erro
        })

}