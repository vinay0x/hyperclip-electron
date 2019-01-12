const { ipcRenderer } = require('electron')
const { store } = require('../store')
const settings = require('electron').remote.require('electron-settings')
const { setDarkMode } = require('../reducers/settings')

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
  hideWindow
}
