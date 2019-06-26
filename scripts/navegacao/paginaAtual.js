import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js'
import { formataEndereco } from '/scripts/endereco/formataEndereco.js'
import { carregar } from '/scripts/navegacao/carregar.js'

import * as historico from '/scripts/navegacao/historico.js'

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


$janelaPrincipal.addEventListener('load', function salvaPaginaAtual(){    
    const endereco = $janelaPrincipal.contentWindow.location.href
    historico.adiciona(endereco)
})

$botaoVoltar.addEventListener('click', function() {
    const enderecoVolta = historico.volta()
    if(enderecoVolta !== undefined) 
        carregar(enderecoVolta)
})

$botaoAvancar.addEventListener('click', function() {
    const enderecoAvanca = historico.avanca()
    if(enderecoAvanca !== undefined) 
        carregar(enderecoAvanca)
})
