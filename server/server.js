const express = require('express');
const app = express();
const path = require('path');
const server_config = require('../server.json');
const router = require('./routes/index');
const apiDocs = require('./swagger-doc/api-docs');
const morgan = require('morgan');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();



const host = server_config.host;
const port = server_config.port;



app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Gate API',
            version: '1.0.0',
            description: 'Gate API',
        },
        servers: [
            {
                url: `http://${host}:${port}`,
            }
        ],
    },
    apis:['./swagger-doc/api-docs.js']
};

const specs = swaggerJsDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


app.use(morgan('dev'))
app.use(cors())

app.use('/', router);


// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.listen(port, host, () => {
    console.log(`server app listening at http://${host}:${port}`)
})
module.exports = app;





// for kill port
//netstat -ano | findstr :<PORT>
//taskkill /PID <PID> /F