const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    setTitle: (data) => ipcRenderer.send('set-data', data),
    sendSyncData:()=>ipcRenderer.sendSync('synchronous-message','port Data recieved'),

})



