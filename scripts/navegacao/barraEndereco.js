import { carregar } from '/scripts/navegacao/carregar.js'
import { Endereco } from '/scripts/endereco/Endereco.js'

let endereco

$janelaPrincipal.addEventListener('load', function() {
    endereco = new Endereco(
        this.contentWindow.location.href
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
        endereco = Endereco($inputEndereco.value)
        carregar(endereco)
    }
})
