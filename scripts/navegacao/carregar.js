import { Endereco } from "/scripts/endereco/Endereco.js";

/*
Jeito alternativo de verificar um tipo.

Mas sem verificar se rodou alguma lógica por trás
else if(
    typeof seiLah.urlCompleta === 'string' && 
    typeof seiLah.urlResumida === 'string'
)

return {
      type: "Endereco",
      ...propriedades
}
*/

export function carregar(seiLah) {
    let endereco

    if(typeof seiLah === 'string') {
        endereco = new Endereco(seiLah)
    } else if(seiLah instanceof Endereco){
        endereco = seiLah
    } else {
        throw new Error(`
            Você passou um endereço que não é nem string nem Endereco:
                Valor: ${JSON.stringify(seiLah)}
                Tipo: ${typeof seiLah}
        `)
    }

    $janelaPrincipal.src = endereco.urlCompleta
    $inputEndereco.value = endereco.urlCompleta
}