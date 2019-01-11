const electron = require('electron')

const setEvents = (win, app) => {
  electron.ipcMain.on('hide', () => {
    app.hide()
  })
}

module.exports = {
  setEvents
}
