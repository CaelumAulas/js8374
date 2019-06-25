
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
