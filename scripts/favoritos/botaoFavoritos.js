import { carregar } from '/scripts/navegacao/carregar.js'
import { Endereco } from "/scripts/endereco/Endereco.js";

class Favorito extends Endereco{

    constructor(nome, endereco) {
        super(endereco)
        this.nome = nome || this.urlResumida
        this.descricao = this.urlResumida

        // `this` sempre vai ser o Favorito extend Endereco
        this.onclick = this.onclick.bind(this)
        
        /*
            Opção ao bind é criar uma outra função como uma arrow function:
            this.onclick = () => this.onclick()

            O `this` em `arrow functions` tem escopo léxico. 
            Ou seja, o this vai sempre apontar para o this do lugar onde a função foi criada.
        */
    }

    onclick () {
        carregar(this)
    }
}


// favorito.nome="sextou"
// Objetos 
$botaoFavoritos.addEventListener('click', function(){
    const nome = prompt("Qual o nome do favorito")

    const favorito = new Favorito(nome, $janelaPrincipal.contentWindow.location.href)


    $Cake.addFavorite(favorito)
})
