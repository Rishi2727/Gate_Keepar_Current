const setButton = document.getElementById('btn')
const hostName = document.getElementById('host')
const port = document.getElementById('port')
const DatabaseType = document.getElementById('DatabaseType')
const DatabaseName = document.getElementById('DatabaseName')
const DatabaseUser = document.getElementById('username')
const DatabasePassword = document.getElementById('password')


setButton.addEventListener('click', () => {
    const data={
        host: hostName.value,
        port: port.value,
        dbType: DatabaseType.value,
        dbName: DatabaseName.value,
        dbUser: DatabaseUser.value,
        dbPassword: DatabasePassword.value
    }
    window.electronAPI.setTitle(data)
});




//------------------------------------maanager group-------------------------------

