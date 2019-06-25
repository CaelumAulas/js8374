import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js'
import { formataEndereco } from '/scripts/endereco/formataEndereco.js'
import { carregar } from '/scripts/navegacao/carregar.js'

//TODO criar módulo pra isso
const paginaAtual = sessionStorage.getItem('paginaAtual')

const paginaPraCarregar = paginaAtual !== null
    ? paginaAtual
    : storagePaginaInicial.paginaInicial

const enderecoCompleto = formataEndereco(paginaPraCarregar)
carregar(enderecoCompleto)

$janelaPrincipal.addEventListener('load', function salvaPaginaAtual(){
    const endereco = $janelaPrincipal.contentWindow.location.href
    sessionStorage.setItem('paginaAtual', endereco)
})
