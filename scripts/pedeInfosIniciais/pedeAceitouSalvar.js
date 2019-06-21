/*
    Função
    Anônima
    Imediatemente
    Invocada

    Immediately
    Invoked
    Function
    Expression

    Vulgo: IIFE

    Porque?
    Porque navegadores pegam os arquivos nas tags <script> e fazem com que todos rodem
    no mesmo escopo. Toda variável que esteja 'solta' no arquivo fica global!
    
    Todo `var`dentro de função, só existe dentro daquela função, enquanto ela é executada. Tirando isso, 
    ela sempre estará global, mesmo dentro de blocos de código em `if`, `else`, `while` e `for`. Dizemos que 
    o escopo da `var` é dinâmico.

    Já, `const` e `let` têm escopo léxico. Traduzindo:
    Elas ficam contidas em blocos de código. Variáveis com `const` e `let` não ficam 
    globais se estiverem dentro de um `if`, `else`, `while`, `for` ou `function`.


    Por que não deixar global?

        Para poder da o nome das suas variáveis do jeito que quiser. Sem impedir que outros códigos do sistema
        usem um nome de variável igual. Cada arquivo fica na sua.

        Por que `var` permite que você recrie as variável com outro valor. Se dois arquivos usam o mesmo nome de `var`:

            // Arquivo A
            var contador = 2

            ---
            // Arquivo B
            var contador = 4

        O valor da variável contador será `4` em todos os arquivos, inclusive no Arquivo A, 
        que queria que a variável tivesse o valor `2`.
        Outros códigos não relacionados com o seu podem modificar variáveis no seu código, muitas vezes sem querer.
        Em casos de nomes de variáveis comuns como `contador` e `i` utilizados em loops, isso pode ser bem ruim.

        Com `const` e `let` as variáveis não podem ser re-declaradas. O seguinte caso resutlaria em um erro 
        que encerraria a execução do código:
            // Arquivo A
            const numero = 2

            ---
            // Arquivo B
            const numero = 4 

        O Arquivo B lançará um erro dizendo que não é possível redeclarar a `const numero`.
        A mesma coisa aconteceria com o `let`



    A solução encontrada para todos os casos:
        (function() {
            // Qualquer `var`, `const` e `let` aqui dentro não será colocada no escopo global
        })()

    Uma função sem nome que é executada assim que é criada. Ninguém mais consegue chamar ela depois. 
    Executa uma vez e acabou. As variáveis ali dentro estõ presas alí dentro.

    Porém.... se esquecer de colocar o `var` antes do nome da variável:

        (function() {
            numero = 2
        })()

    O processo de **hoisting** faz com que  a variável seja declarada assim, por debaixo dos panos do JS:
        
        var numero = undefined
        (function() {
            numero = 2
        })()

    Variável `numero` está global!

    A solução foi dar um jeito de isso dar erro nas versões novas do JS, mas sem quebrar versões antigas. 
    Não podiam fazer esse código dar erro pq muita gente já usava esse código dessa maneira de propósito.

    A solução, uma string solta no meio do código:

        (function() {
            "use strict"
            numero = 2
        })()

        O código acima resultará num erro, pois o modo 'strict' do JavaScript foi ativado 
        quando ele encontra a srting "use strict".

    Chamamos isso de módulo. 
    Cada módulo pode fazer as variáveis que quiser sem interferir sem querer com o escopo global.
    Mas se for de propósito, ainda consegue:

        let numero

        (function() {
            "use strict"
            numero = 2
        })()

        O código roda sem erros!

    Se quiser exportar alguma variável para o escopo global:

        const variavelGlobal = (function() {
            "use strict"
            const numero = 2

            const variavelExportada = numero + 365

            return variavelExportada
        })()

    Criamos uma `variavelGlobal` que tem o valor `367`, resultado de ter rodado 
    o código do nosso módulo.
    
    Esse é o único jeito de criar módulos no ECMAScript antigo.


        Pessoal do node não quis isso e adotou um padrão chamado "CommonJS". Nele, todo arquivo já é um módulo. E nenhuma variável 
    é colocada no escopo global.

    Foi criado um mecanismo de importação e exportação de valores.

    Quando algum arquivo quer acessar informações de outro:
        
        // Arquivo a.js
        const valorDeOutroArquivo = require('b.js')

        ---

        //Arquivo b.js
        const valorExportado = 2

        module.exports = valorExportado

    Isso não funciona nos navegadoresm por padrão. Esse padrão foi o adotado pelo Node.

    Assim, com dois jeitos de fazer JS, a ECMA elaborou os ESModules que estamos usando nesse código.

    Eles não sã suportados por padrão no Node, ainda há muita discussão sobre como será implementado.
    
    Os navegadores mais novos já conseguem usar esses módulos se identificarmos nosso arquivo 
    como um módulo lá na tag `<script type="module">`

    Em qualquer outro caso (navegadores mais antigos e Node), se você esrtiver usando `import` e `export`, você
    com certeza está transformando seu código em IIFEs ou CommonJS ou algum outro padrão, 
    através de um compilador, como o Babel.
*/

import * as storageAceitouSalvar from '/scripts/storage/aceitouSalvar.js'

if(storageAceitouSalvar.aceitouSalvar === null){
    // shadowing/sombra no módulo
    // redeclerando com o mesmo nome
    const aceitouSalvar = confirm('Você aceita que a gente salve suas informações?')    

    if(!aceitouSalvar) {
        alert('Você pode mudar isso na página de configurações')
    }
    
    const funcaoSalvar = aceitouSalvar === true
        ? storageAceitouSalvar.setAceitou
        : storageAceitouSalvar.setNaoAceitou

    funcaoSalvar()
}