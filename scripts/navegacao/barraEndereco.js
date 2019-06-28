import { carregar } from '/scripts/navegacao/carregar.js'
import { Endereco } from '/scripts/endereco/Endereco.js'

import { CakeEnderecoInvalidoError } from '/scripts/erros/CakeEnderecoInvalidoError.js'

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

        try {
            endereco = Endereco($inputEndereco.value)
        } catch (error) {
            if(error instanceof CakeEnderecoInvalidoError){
                alert(error.message)
            } else {
                throw error
            }
        }


        carregar(endereco)
    }
})
