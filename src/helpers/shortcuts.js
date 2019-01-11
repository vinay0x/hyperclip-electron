const { globalShortcut } = require('electron')

const registerShortCuts = (shortcut, action) => {
  const success = globalShortcut.register(shortcut, action)
  if (!success) return new Error('Shortcut Registering failed')
}

const unregisterShortCuts = (shortcut) => {
  globalShortcut.unregister(shortcut)
}

const unregisterAllShortcuts = () => {
  globalShortcut.unregisterAll()
}

const registerDefaultShortcuts = (win) => {
  registerShortCuts('Command+Shift+L', () => {
    win.show()
  })
}

module.exports = {
  registerShortCuts,
  unregisterShortCuts,
  unregisterAllShortcuts,
  registerDefaultShortcuts
}
