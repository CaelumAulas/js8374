// Encapsulamento
let aceitouSalvar = JSON.parse(localStorage.getItem('aceitouSalvar')) //null

// Ambiente onde ela foi criada
// Acesso a variaveis do ambiente
// function setAceitouSalvar é uma "Closure"
//  privada
function setAceitouSalvar(valor) {
    aceitouSalvar = valor
    localStorage.setItem("aceitouSalvar", valor)
}

function setAceitou() {
    setAceitouSalvar(true)
}

 function setNaoAceitou() {
    setAceitouSalvar(false)
}

// Revealing Module Pattern
export {
    aceitouSalvar,
    setAceitou,
    setNaoAceitou
}