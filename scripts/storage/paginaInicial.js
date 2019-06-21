export default localStorage.getItem('paginaInicial')

export function setPaginaInicial(valor) {
    localStorage.setItem('paginaInicial', valor)
}