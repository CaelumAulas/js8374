import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js'
import { formataEndereco } from '/scripts/endereco/formataEndereco.js'

//TODO criar módulo pra isso
const paginaAtual = sessionStorage.getItem('paginaAtual')

const paginaPraCarregar = paginaAtual !== null
    ? paginaAtual
    : storagePaginaInicial.paginaInicial

const enderecoCompleto = formataEndereco(paginaPraCarregar)
$janelaPrincipal.src = enderecoCompleto
$inputEndereco.value = enderecoCompleto

$janelaPrincipal.addEventListener('load', salvaPaginaAtual)

function salvaPaginaAtual(){
    const endereco = $janelaPrincipal.contentWindow.location.href
    sessionStorage.setItem('paginaAtual', endereco)
}
