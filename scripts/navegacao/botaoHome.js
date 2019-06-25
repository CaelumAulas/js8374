import { paginaInicial } from '/scripts/storage/paginaInicial.js'
import { carregar } from '/scripts/navegacao/carregar.js'

//Como a função vaiParaHome não será reaproveitada em nenhum outro lugar, ela pode ser pasada direto como parâmetro do `addEventListener`
$botaoHome.addEventListener('click', function vaiParaHome() {
    carregar(paginaInicial)
})
