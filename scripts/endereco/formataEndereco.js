function formataEndereco(enderecoPraFormatar) {
    if(!enderecoPraFormatar || enderecoPraFormatar ==='blank') {
        return 'blank'
    }

    if (
        enderecoPraFormatar.substring(0, 7) !== 'http://' &&
        enderecoPraFormatar.substring(0,8) !== 'https://'
    ) {
        // Assignement Atribuição
        enderecoPraFormatar = 'http://' + enderecoPraFormatar
    }

    return enderecoPraFormatar
}

export { formataEndereco }