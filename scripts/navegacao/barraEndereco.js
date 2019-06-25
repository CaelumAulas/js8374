import { carregar } from '/scripts/navegacao/carregar.js'
import { formataEndereco } from '/scripts/endereco/formataEndereco.js'

$inputEndereco.addEventListener('focus', exibeEnderecoCompleto)

$inputEndereco.addEventListener('blur', exibeEnderecoResumido)
$janelaPrincipal.addEventListener('load', exibeEnderecoResumido)

function exibeEnderecoCompleto(){
    $inputEndereco.value = $janelaPrincipal.contentWindow.location.href
}

function exibeEnderecoResumido() {
    const url = new URL($janelaPrincipal.contentWindow.location.href)
    const enderecoResumido = url.hostname

    $inputEndereco.value = enderecoResumido
}

// Todo parâmetro é opcional
$inputEndereco.addEventListener('keyup', function(evento) {
    // o navegador executou o callback
    // as informações
    const apertouEnter = evento.key === 'Enter'
    if(apertouEnter) {
        const enderecoCompleto = formataEndereco($inputEndereco.value)
        carregar(enderecoCompleto)
    }
})
