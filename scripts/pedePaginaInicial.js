/*
Içamento/Hoisting de declarações:
    
    O código abaixo que cria a variável depois de usá-la:
    ```
    $inputEndereco.value = paginaInicial
    $janelaPrincipal.src =  paginaInicial 
    var paginaInicial = 'http://google.com'
    ```

    É a mesma coisa que esse próximo código:
    ```
    var paginaInicial = undefined
    $inputEndereco.value = paginaInicial
    $janelaPrincipal.src =  paginaInicial
    paginaInicial = 'http://google.com'
    ```

    O JS manda a declaração da variável pra cima, faz o hoisting. 
    Esse código da página inicial vai executar sem erros porque `undefined` é um valor válido.

    "hoisting foi um detalhe de implementação"
        – Brendan Eich (criador do JavaScript)

    Em outras linguagens usar uma variável antes de criá-la resultaria num erro que impediria que o código seguisse com a execução

    ECMAScript não vai mudar o comportamento de algo. 
    ECMAScript não quer quebrar códigos que já usem o `var` de propósito.
    ECMAScript fez uma nova forma de declarar variáveis que segue as outras linguagens:
        const paginaInicial = 'http://google.com'
        let paginaInicial = 'http://google.com'
*/

let paginaInicial = prompt("Escolha a página inicial")

if (
    paginaInicial.substring(0, 7) !== 'http://' &&
    paginaInicial.substring(0,8) !== 'https://'
) {
    // Assignement Atribuição
    paginaInicial = 'http://' + paginaInicial
}

$janelaPrincipal.src =  paginaInicial
$inputEndereco.value = paginaInicial

