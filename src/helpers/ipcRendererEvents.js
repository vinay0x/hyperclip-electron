const { ipcRenderer } = require('electron')
const { store } = require('../store')
const settings = require('electron').remote.require('electron-settings')
const { setDarkMode } = require('../reducers/settings')
const { clearClipboard } = require('../reducers/clipboard');

const hideWindow = () => {
  ipcRenderer.send('hide')
}

const sendKeys = (data) => {
  console.log('yo1')
  ipcRenderer.send('sendKeys', data)
}

(() => {
  ipcRenderer.on('clearClipboard', () => {
    store.dispatch(clearClipboard());
  })
  // Set initial value
  store.dispatch(setDarkMode(settings.get('darkMode')))
  // Listen for changes
  settings.watch('darkMode', (newVal) => {
    store.dispatch(setDarkMode(newVal))
  })
})()

module.exports = {
  hideWindow,
  sendKeys
}
