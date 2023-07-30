const express = require('express');
const app = express();
const port = 3333
const serverconfig = require('./configs/server.config')
app.listen(port, ()=>{
    console.log('server started');
})