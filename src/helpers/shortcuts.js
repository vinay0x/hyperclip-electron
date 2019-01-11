const { globalShortcut } = require('electron')

export const registerShortCuts = (shortcut, action) => {
  const success = globalShortcut.register(shortcut, action)
  if (!success) return new Error('Shortcut Registering failed')
}

export const unregisterShortCuts = (shortcut) => {
  globalShortcut.unregister(shortcut)
}

export const unregisterAllShortcuts = () => {
  globalShortcut.unregisterAll()
}
