import paginaInicial, { setPaginaInicial } from '/scripts/storage/paginaInicial.js'
import aceitouSalvar, { setAceitouSalvar }  from '/scripts/storage/aceitouSalvar.js'

$inputPaginaInicial.value = paginaInicial
$inputPermitiuSalvar.checked = aceitouSalvar


// o que vai ser executado quando clicar
// o que vai ser executado quando o evento de click acontecer
$botaoSalvar.onclick = salvar

// função de callback
// hoisting
// função é um tipo de dado
// executada em um outro momnento do tempo
function salvar(){
    setAceitouSalvar($inputPermitiuSalvar.checked)
    setPaginaInicial($inputPaginaInicial.value)
}
