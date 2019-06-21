export let paginaInicial = localStorage.getItem('paginaInicial')

export function setPaginaInicial(valor) {
    paginaInicial = valor
    localStorage.setItem('paginaInicial', valor)
}