const electron = require('electron')

const setEvents = (win, app) => {
  electron.ipcMain.on('setHeightFactor', (event, factor) => {
    const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize
    win.setSize(parseInt(width / 2), parseInt(height / factor))
  })

  electron.ipcMain.on('hide', () => {
    const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize
    win.setSize(parseInt(width / 2), parseInt(height / 12.1))
    app.hide()
  })
}

module.exports = {
  setEvents
}
