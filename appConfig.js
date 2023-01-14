const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");
const config = require("./config.json");
const applicationType = config.applicationType;

appconfig = () => {
  // ------------------------------------------------------------server type ------------------------
  if (applicationType == "Server") {
    function createWindow() {
      const mainWindow = new BrowserWindow({
        webPreferences: {
          preload: path.join(__dirname, "preload.js"),
        },
      });
//------------------------------------------------------------ipcmain------------------------------------------------
      ipcMain.on("set-data", (event, data) => {
        const webContents = event.sender;
        const win = BrowserWindow.fromWebContents(webContents);
        // console.log(data)
        const { host, port, dbType, dbName, dbUser, dbPassword } = data;
        if (
          host == "" ||
          port == "" ||
          dbType == "" ||
          dbName == "" ||
          dbUser == "" ||
          dbPassword == ""
        ) {
          console.log("empty");
          // console.log(data)
        } else {
          if (!fs.existsSync(path.join(__dirname, "config.json"))) {
            defautConfig();
            updateConfig("applicationType", "Server");
            updateConfig("databaseType", dbType);
            updateConfig("host", host);
            updateConfig("port", port);
            updateConfig("databaseName", dbName);
            updateConfig("username", dbUser);
            updateConfig("password", dbPassword);
          } else {
            // console.log(data)
            console.log("update receieved");
            updateConfig("applicationType", "Server");
            updateConfig("databaseType", dbType);
            updateConfig("host", host);
            updateConfig("port", port);
            updateConfig("databaseName", dbName);
            updateConfig("username", dbUser);
            updateConfig("password", dbPassword);
            setTimeout(() => {
              app.relaunch();
              mainWindow.close();
              app.quit(0);
            }, 2000);
          }
        }
      });

      mainWindow.loadFile("./src/appconfig.html");
    }
  }
  //------------------------------------------------------------client type--------------------------
  else if (applicationType == "Client") {
    console.log("client");
  }
//------------------------------------------------------------default type--------------------------
  app.whenReady().then(() => {
    createWindow();
// --------------------------------------create window when ready------------------------------------------
    app.on("activate", function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });
};

//------------------------------------------------default config-----------------------------------------
function defautConfig() {
  if (!fs.existsSync(path.join(__dirname, "config.json"))) {
    fs.writeFileSync(
      path.join(__dirname, "config.json"),
      JSON.stringify({
        applicationType: "",
        databaseType: "",
        host: "",
        port: "",
        databaseName: "",
        username: "",
        password: "",
      })
    );
  }
}

//-------------------------------------------------update config-------------------------------------------
function updateConfig(key, values) {
  if (fs.existsSync(path.join(__dirname, "config.json"))) {
    const data = fs.readFileSync(path.join(__dirname, "config.json"), "utf8");

    // update values
    const obj = JSON.parse(data);
    obj[key] = values;

    // write updated values to config.json
    fs.writeFileSync(path.join(__dirname, "config.json"), JSON.stringify(obj));
  }
}

module.exports = appconfig;
