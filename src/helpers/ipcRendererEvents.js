const { ipcRenderer } = require('electron')

const makeWindowBig = () => {
  ipcRenderer.send('setHeightFactor', 3)
}

const makeWindowSmall = () => {
  ipcRenderer.send('setHeightFactor', 15)
}

const hideWindow = () => {
  ipcRenderer.send('hide')
}

module.exports = {
  makeWindowBig,
  makeWindowSmall,
  hideWindow
}
