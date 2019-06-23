import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js'
import { formataEndereco } from '/scripts/endereco/formataEndereco.js'

//TODO criar módulo pra isso
// Pegar pagina atual do localStorage
const paginaAtual = sessionStorage.getItem('paginaAtual')

//TODO isolar funcao carrega
if (paginaAtual !== null) {
    const enderecoCompleto = formataEndereco(paginaAtual)

    $janelaPrincipal.src = enderecoCompleto
    $inputEndereco.value = enderecoCompleto
} else {
    const enderecoCompleto = formataEndereco(storagePaginaInicial.paginaInicial)

    $janelaPrincipal.src = enderecoCompleto
    $inputEndereco.value = enderecoCompleto
}
