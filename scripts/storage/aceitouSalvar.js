export default JSON.parse(localStorage.getItem('aceitouSalvar'))

export function setAceitouSalvar(aceitouSalvar) {
    localStorage.setItem("aceitouSalvar", aceitouSalvar)
}