const path = require('path')
const electron = require('electron')
const { Tray, Menu } = electron
const open = require('open')
const { app, BrowserWindow } = electron
const { registerDefaultShortcuts } = require('./src/helpers/shortcuts')
const { setEvents } = require('./src/helpers/ipcMainEvents')
const settings = require('electron-settings')

const isDevelopment = process.env.NODE_ENV === 'DEV'
let clipWindow
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

app.setLoginItemSettings({
  openAtLogin: true,
  openAsHidden: true
})

app.on('ready', async () => {
  app.dock.hide()
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize
  clipWindow = new BrowserWindow({
    width: parseInt(width / 2),
    height: parseInt(height / 1.94),
    show: true,
    frame: false,
    alwaysOnTop: true,
    fullscreenable: false,
    // transparent: true,
    resizable: false
  })
  const appIcon = new Tray(path.join(__dirname, './assets/icons/Logo@2x.png'))
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'About Hyperclip',
      click () {
        open('https://github.com/o-my-code/hyperclip')
      }
    },
    {
      label: 'Dark Mode',
      type: 'checkbox',
      checked: settings.get('darkMode'),
      click (e) {
        settings.set('darkMode', e.checked)
      }
    },
    {
      label: 'Quit',
      click () {
        app.quit()
      } }
  ])
  appIcon.setContextMenu(contextMenu)
  clipWindow.setVisibleOnAllWorkspaces(true)
  // Register shortcut to show window on keypress
  registerDefaultShortcuts(clipWindow)
  // Register events
  clipWindow.on('blur', () => app.hide())
  // Register IPC Events
  setEvents(clipWindow, app)
  if (isDevelopment) {
    await installExtensions()
    const chokidar = require('chokidar')
    chokidar.watch('./index.js').on('change',
      () => {
        app.relaunch()
        app.exit()
      })
    clipWindow.loadURL('http://localhost:4567')
  } else {
    clipWindow.loadFile(path.resolve(path.join(__dirname, './dist/index.html')))
  }

  // show window once on first load
  // clipWindow.webContents.once('did-finish-load', () => {
  //   clipWindow.show()
  // })

  clipWindow.webContents.on('did-finish-load', () => {
    // Handle window logic properly on macOS:
    // 1. App should not terminate if window has been closed
    // 2. Click on icon in dock should re-open the window
    // 3. ⌘+Q should close the window and quit the app
    if (process.platform === 'darwin') {
      clipWindow.on('close', function (e) {
        if (!forceQuit) {
          e.preventDefault()
          clipWindow.hide()
        }
      })

      app.on('activate', () => {
        clipWindow.show()
      })

      app.on('before-quit', () => {
        forceQuit = true
      })
    } else {
      clipWindow.on('closed', () => {
        clipWindow = null
      })
    }
  })
})
