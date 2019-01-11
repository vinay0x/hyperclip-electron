const path = require('path')
const electron = require('electron')
const { app, BrowserWindow } = electron
const isDevelopment = process.env.NODE_ENV === 'DEV'
let mainWindow
let forceQuit = false

const installExtensions = async () => {
  console.log('Installing extensions')
  const installer = require('electron-devtools-installer')
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS']
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS
  for (const name of extensions) {
    try {
      console.log('Installing', name)
      await installer.default(installer[name], forceDownload)
    } catch (e) {
      console.log(`Error installing ${name} extension: ${e.message}`)
    }
  }
  console.log('Installed extensions.')
}

app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('ready', async () => {
  app.dock.hide()
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize
  mainWindow = new BrowserWindow({
    width: parseInt(width / 2),
    height: parseInt(height / 15),
    show: true,
    frame: false
  })

  if (isDevelopment) {
    await installExtensions()
    const chokidar = require('chokidar')
    chokidar.watch('./index.js').on('change',
      () => {
        app.relaunch()
        app.exit()
      })
    mainWindow.loadURL('http://localhost:4567')
  } else {
    mainWindow.loadFile(path.resolve(path.join(__dirname, './dist/index.html')))
  }

  // show window once on first load
  // mainWindow.webContents.once('did-finish-load', () => {
  //   mainWindow.show()
  // })
  mainWindow.show()

  mainWindow.webContents.on('did-finish-load', () => {
    // Handle window logic properly on macOS:
    // 1. App should not terminate if window has been closed
    // 2. Click on icon in dock should re-open the window
    // 3. ⌘+Q should close the window and quit the app
    if (process.platform === 'darwin') {
      mainWindow.on('close', function (e) {
        if (!forceQuit) {
          e.preventDefault()
          mainWindow.hide()
        }
      })

      app.on('activate', () => {
        mainWindow.show()
      })

      app.on('before-quit', () => {
        forceQuit = true
      })
    } else {
      mainWindow.on('closed', () => {
        mainWindow = null
      })
    }
  })
})
