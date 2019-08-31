const electron = require('electron')
const ks = require('sendkeys-js');

const setEvents = (win, app) => {
  electron.ipcMain.on('hide', () => {
    app.hide()
  })
  electron.ipcMain.on('sendKeys', async (event, data) => {
   try {  
     setTimeout(() => ks.send(`"${data}"`), 50)
   } catch (error) {
     console.log("Error happened while pasting.", error)
   }
  })
}

module.exports = {
  setEvents
}
