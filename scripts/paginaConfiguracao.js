import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js'
import * as storageAceitouSalvar  from '/scripts/storage/aceitouSalvar.js'

import { verificaEndereco } from '/scripts/endereco/verificaEndereco.js'

// named export
// destructuring
// desestruturação, explodindo
import { Endereco } from '/scripts/endereco/Endereco.js'
import { CakeEnderecoInvalidoError } from '/scripts/erros/CakeEnderecoInvalidoErrorClasse.js';


function deuRuim(error){
    console.dir(error)
    console.log('É CakeEnderecoInvalidoError', error instanceof CakeEnderecoInvalidoError)
    console.log('É erro', error instanceof Error)
    $inputPaginaInicial.value = ''
    console.warn(error.toString())
    alert("Inválido")
}


$inputPaginaInicial.value = storagePaginaInicial.paginaInicial
$inputPermitiuSalvar.checked = storageAceitouSalvar.aceitouSalvar


// o que vai ser executado quando clicar
// o que vai ser executado quando o evento de click acontecer
$botaoSalvar.onclick = salvar

// função de callback
// hoisting
// função é um tipo de dado
// executada em um outro momento do tempo
// Declaração de função
// Function declaration

// Callback Hell
async function salvar(){
    try {

        // Expressão de função
        // Function expression
        const funcaoEscolhida = $inputPermitiuSalvar.checked === true 
            ? storageAceitouSalvar.setAceitou
            : storageAceitouSalvar.setNaoAceitou
        
        funcaoEscolhida()

    
        const enderecoCompleto = new Endereco($inputPaginaInicial.value)

        await verificaEndereco(enderecoCompleto)

        $inputPaginaInicial.value = enderecoCompleto.toString()
        storagePaginaInicial.setPaginaInicial(enderecoCompleto)


    } catch(error) {
        if(error instanceof CakeEnderecoInvalidoError){
            // Função de callback
           deuRuim(error)
        } else {
            throw error
        }
    }
}

// TODODepois nome no localstorage vir do modulo storage
/*
  const chavesPermanentes = [
        storagePaginaInicial.nome,
        storageAceitouSalvar.nome   
    ]

    for(let storage of storages)
                storage.remove()
*/
$botaoLimpaTudo.addEventListener('click', function () {
    const chavesPermanentes = [
        'aceitouSalvar',
        'aceitouTermos'
    ]
    
    const listaChavesLocalStorage = Object.keys(localStorage)
    for(let chave of listaChavesLocalStorage) {
        const isChavePermanente = chavesPermanentes.includes(chave)
        
        if(!isChavePermanente){
            localStorage.removeItem(chave)
        }
    }

    const listaChavesSessionStorage = Object.keys(sessionStorage)
    for(let chave of listaChavesSessionStorage) {
        sessionStorage.removeItem(chave)
    }

    window.location.reload()
})
