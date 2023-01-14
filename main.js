const {
  app,
  BrowserWindow,
  ipcMain,
  Tray,
  Menu,
  nativeImage,
} = require("electron");
const path = require("path");
const appconfig = require("./appConfig.js");
// const server = require("./server/server.js");
const backgroundService = require("./backgroundService/backgroundServices.js");

// --------------------------------------create window------------------------------------------
function createWindow() {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
//--------------------------------------------ipcmain------------------------------------------------
  ipcMain.on("set-title", (event, title) => {
    const webContents = event.sender;
    const win = BrowserWindow.fromWebContents(webContents);
    win.setTitle(title);
  });

  mainWindow.loadFile("index.html");
}

//---------------------------------------------create tray--------------------------------------------
const createTray = () => {
  const iconPath = path.join(__dirname, "icon.ico");
  const trayIcon = nativeImage.createFromPath(iconPath);
  const tray = new Tray(trayIcon);
  const contextMenu = Menu.buildFromTemplate([
//---------------------------------------Tray Menu----------------------------------------------------
    {
      label: "Restart App",
      click: function () {
        app.relaunch();
        app.quit(0);
        console.log("Application Restarted");
      },
    },
    {
      label: "Configuration",
      click: function () {
        appconfig();
        console.log("Configuration");
      },
    },
    {
      label: "Quit",
      click: function () {
        app.quit();
        console.log("Quit");
      },
    },
  ]);
  tray.setToolTip("This is my application.");
  tray.setContextMenu(contextMenu);
};
//--------------------------------------------app events-----------------------------------------------
app.on("ready", createTray);
// --------------------------------------create window when ready------------------------------------------
app.whenReady().then(() => {
  createWindow();
//--------------------------------------------app events-----------------------------------------------
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// --------------------------------------quit when all windows are closed------------------------------------------
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    // app.quit()
  }
});
