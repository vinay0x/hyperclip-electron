const { ipcRenderer } = require('electron')

const makeWindowBig = () => {
  ipcRenderer.send('setHeightFactor', 1.95)
}

const makeWindowSmall = () => {
  ipcRenderer.send('setHeightFactor', 12.1)
}

const hideWindow = () => {
  ipcRenderer.send('hide')
}

module.exports = {
  makeWindowBig,
  makeWindowSmall,
  hideWindow
}
