


const {SerialPort }= require('serialport');



let portsList = [] //['COM1','COM2','COM3']


// get serial port list from the system
getPortList=async()=> {

try{
    SerialPort.list().then(ports => {
        let temp =[]
        ports.forEach(port => {
        temp.push(port.path)
        // console.log(port.path)
    });
    portsList=temp

})
}catch(err){
    console.log(err)
}
}

setInterval(() => {
getPortList()
}, 1000);



setInterval(() => {
    console.log(portsList)
}, 2000);

