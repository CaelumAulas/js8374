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
    
Type coercing
    O seguinte código: 
        if (paginaInicial !== null && paginaInicial == '') {}
    
    Pode ter o mesmo efeito que esse código:
        if (paginaInicial) {}
    
    Quando digo "pode" ter o mesmo efeito é porque o que está acontecendo alí é a conversão de 
    `paginaInicial` para booleano:
        Boolean(paginaInicial)
    
    Esse código pode ter o resultado `false` para os seguintes valores:
        Boolean(null)
        Boolean(undefined)
        Boolean('')
        Boolean(0)
        Boolean(NaN)

    Ou seja, fazer `if (paginaInicial)` significa muito mais condições 
    do que `if (paginaInicial !== null && paginaInicial == '')`

    Essa conversão de tipos que é feita pelo JavaScript e não pelo nosso código 
    é chamada de *Implicit Type Coercion*

    Ela sempre vai acontecer quando algum tipo específico é esperado, no caso do `if()`, um Booleano.

    Um caso de type coercion acontece quando fazemos uma concatenação:
        Se página inicial for null: 
            'http://' + paginaInicial 

        `paginaInicial` será con vertida para a string 'null' e terá como resultado: 'http://null' 

    Em uma operação/comparação de igualdade com 2 iguais `==` isso também acontece:
        const paginaInicial = null
        paginaInicial == 'null' // true

    Já no caso de 3 iguais `===`, isso não acontece:
        const paginaInicial = null
        paginaInicial === 'null' // true

*/
// TODO Onde usar IIFEs hoje em dia?
// TODO A desgraça dos ESModules no Node
// TODO Babel IIFEs / CommonJS / AMD / System

import { aceitouSalvar as storageAceitouSalvar } from '/scripts/storage/aceitouSalvar.js'
import { paginaInicial, setPaginaInicial } from '/scripts/storage/paginaInicial.js'

// named export
import { formataEndereco } from '/scripts/endereco/formataEndereco.js'

if(storageAceitouSalvar === null || storageAceitouSalvar === true){
    // Sem shadowing
    let paginaInicialDefault = paginaInicial

    if(!paginaInicialDefault) {
        paginaInicialDefault = prompt("Escolha a página inicial")
    }

    if(paginaInicialDefault) {
        const enderecoCompleto = formataEndereco(paginaInicialDefault)
        setPaginaInicial(enderecoCompleto)
    }
}
