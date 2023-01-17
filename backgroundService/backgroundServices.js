


const {SerialPort }= require('serialport');
const axios = require('axios');
const {ipcMain} = require('electron');



let portsList = [] //['COM1','COM2','COM3']

getPortList=async()=> {

try{
    SerialPort.list().then(ports => {
        let temp =[]
        ports.forEach(port => {
        temp.push({port})
        // console.log(port)
    });
    portsList=temp

})
}catch(err){
    console.log(err)
}
}

  ipcMain.on('synchronous-message', (event, arg) => {
    console.log(arg) // prints "ping"
    event.returnValue = portsList;
  })


getPortList()
setInterval(() => {
getPortList()
}, 2000);


