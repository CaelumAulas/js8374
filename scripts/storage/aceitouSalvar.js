// Encapsulamento
export let aceitouSalvar = JSON.parse(localStorage.getItem('aceitouSalvar')) //null


// Ambiente onde ela foi criada
// Acesso a variaveis do ambiente
// function setAceitouSalvar é uma "Closure"
function setAceitouSalvar(valor) {
    aceitouSalvar = valor
    localStorage.setItem("aceitouSalvar", valor)
}

export function setAceitou() {
    setAceitouSalvar(true)
}

export function setNaoAceitou() {
    setAceitouSalvar(false)
}