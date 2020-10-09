const { app, BrowserWindow } = require('electron')
//const reload = require('electron-reload')
const ejs = require('ejs-electron');
const path = require('path')

ejs.data({
  rows:100,
  cols:25,
  pageHeader : "EXCEL_CLONE"
})

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600, 
        webPreferences: {
            nodeIntegration: true
        }
    })
    // and load the index.html of the app.
      win.loadFile('index.ejs').then(function(){
         win.removeMenu();
        // win.maximize();
        // win.darkTheme(true);
        win.show();
       // win.webContents.openDevTools();
      });

    // Open the DevTools.187px
}

// reload(__dirname, {
//     electron: path.join(__dirname, 'node_modules/.bin/electron.cmd')
// });

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
// app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') {
//         app.quit()
//     }
// })


// app.on('activate', () => {
//     // On macOS it's common to re-create a window in the app when the
//     // dock icon is clicked and there are no other windows open.
//     if (BrowserWindow.getAllWindows().length === 0) {
//         createWindow()
//     }
// })


//app.allowRendererProcessReuse = false;