$janelaPrincipal.onload = exibeEndereco

function exibeEndereco(){
    $inputEndereco.value = $janelaPrincipal.contentWindow.location.href
}
