import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js'
import * as storageAceitouSalvar  from '/scripts/storage/aceitouSalvar.js'

// named export
// destructuring
// desestruturação, explodindo
import { formataEndereco } from '/scripts/endereco/formataEndereco.js'

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
function salvar(){

    // Expressão de função
    // Function expression
    const funcaoEscolhida = $inputPermitiuSalvar.checked === true 
        ? storageAceitouSalvar.setAceitou
        : storageAceitouSalvar.setNaoAceitou
    
    funcaoEscolhida()

    const enderecoCompleto = formataEndereco($inputPaginaInicial.value)
    $inputPaginaInicial.value = enderecoCompleto
    
    storagePaginaInicial.setPaginaInicial(enderecoCompleto)
}
