;(() => {
  //isElectron function from: https://github.com/cheton/is-electron/blob/4acaa6cab8b527c57c6e56381e6f9766d57c56b2/index.js
  window.isElectron = function isElectron() {
    // Renderer process
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
        return true;
    }

    // Main process
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
        return true;
    }

    // Detect the user agent when the `nodeIntegration` option is set to true
    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
        return true;
    }

    return false;
  }()
})()

;(() => {
  if (window.isElectron) {
    const ipcRenderer = require('electron').ipcRenderer

    window.prompt = function prompt(message, defaultValue) {
      return ipcRenderer.sendSync('window.prompt', {
        message,
        defaultValue
      })
    }
  }
})()

;(() => {
  const $iframe = document.querySelector('iframe')

  // let startLoadEvent = new Event('startload');
    $iframe.addEventListener('load', function() {
      $iframe.contentWindow.document.body.addEventListener('click', function(
        event
      ) {
        event.preventDefault()

        const $anchor =
          $iframe.contentDocument.activeElement.tagName === 'A'
            ? $iframe.contentDocument.activeElement
            : event.path && event.path.filter
            ? event.path.find(element => element.tagName === 'A')
            : event.target.tagName === 'A'
            ? event.target
            : event.target.closest('a')

        if ($anchor) {
          const linkAddress = $anchor.href

          let endereco

          try {
            endereco = new URL(linkAddress)
          } catch (e) {
            if (e instanceof TypeError) {
              const enderecoAtual = $iframe.contentWindow.location.href.replace(
                /\/$/,
                ''
              )
              const stringEndereco =
                enderecoAtual + '/' + linkAddress.replace(/^\//, '')
              endereco = new URL(stringEndereco)
            }
          }

          if (typeof $iframe.onlinkclick === 'function') {
            $iframe.onlinkclick(endereco.toString().replace(/\/$/, ''))
          }

          $iframe.contentWindow.location.href = endereco
          // $iframe.dispatchEvent(startLoadEvent)
        }
      })
    })
})()
