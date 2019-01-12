const { ipcRenderer } = require('electron')
const { store } = require('../store')
const settings = require('electron').remote.require('electron-settings')
const { setDarkMode } = require('../reducers/settings')

const makeWindowBig = () => {
  ipcRenderer.send('setHeightFactor', 1.95)
}

const makeWindowSmall = () => {
  ipcRenderer.send('setHeightFactor', 12.1)
}

const hideWindow = () => {
  ipcRenderer.send('hide')
}

(() => {
  // Set initial value
  store.dispatch(setDarkMode(settings.get('darkMode')))
  // Listen for changes
  settings.watch('darkMode', (newVal) => {
    store.dispatch(setDarkMode(newVal))
  })
})()

module.exports = {
  makeWindowBig,
  makeWindowSmall,
  hideWindow
}
