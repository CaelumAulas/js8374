import { carregar } from '/scripts/navegacao/carregar.js'

import { formataEndereco } from '/scripts/endereco/formataEndereco.js'
import { Endereco } from '/scripts/endereco/criaEndereco.js'


let endereco

$janelaPrincipal.addEventListener('load', function() {
    endereco = new Endereco(
        $janelaPrincipal.contentWindow.location.href
    )
})


$inputEndereco.addEventListener('focus', exibeEnderecoCompleto)

$inputEndereco.addEventListener('blur', exibeEnderecoResumido)
$janelaPrincipal.addEventListener('load', exibeEnderecoResumido)


function exibeEnderecoCompleto(){ 
    $inputEndereco.value = endereco.urlCompleta
}

function exibeEnderecoResumido() {
    $inputEndereco.value = endereco.urlResumida
}

// Todo parâmetro é opcional
$inputEndereco.addEventListener('keyup', function(evento) {
    // o navegador executou o callback
    // as informações
    const apertouEnter = evento.key === 'Enter'
    if(apertouEnter) {
        const enderecoCompleto = formataEndereco($inputEndereco.value)
        endereco = Endereco(enderecoCompleto)
        carregar(enderecoCompleto)
    }
})
