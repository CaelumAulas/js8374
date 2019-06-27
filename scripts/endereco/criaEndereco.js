// função construtora
// função factory
// Fábrica de objetos
function Endereco(endereco) {
    const url = new URL(endereco)

    let enderecoCompleto
    let enderecoResumido
 
    if(url.hostname === 'localhost') {
        const paginaLocal = url.pathname.replace("/", "")
        enderecoCompleto = paginaLocal
        enderecoResumido = paginaLocal
    } else {
        // Colocando apenas `url` também funciona
        // Pois na hora do type coercing a função toString é chamada
        //   de qualquer jeito
        enderecoCompleto = url.toString()
        enderecoResumido = url.hostname
    }

    return {
      urlCompleta: enderecoCompleto,
      urlResumida: enderecoResumido
    }
} 

export { Endereco }
    