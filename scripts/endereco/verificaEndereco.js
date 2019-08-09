import { CakeEnderecoInvalidoError } from '/scripts/erros/CakeEnderecoInvalidoErrorClasse.js';

// Função assíncrona
// Padrão antigo de se fazer funções assíncronas
export function verificaEndereco(endereco, deuBom, deuRuim) {
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
           deuBom()
        } catch(erro) {
            // Função tratadora de erros
            deuRuim(erro)
        }
    })

    xhr.addEventListener('error', function codigo2 () {
        try {
            const error = new CakeEnderecoInvalor(endereco)
            // Função de callback
            deuRuim(error)
        } catch(error) {
            deuRuim(error)
        }
    })
}