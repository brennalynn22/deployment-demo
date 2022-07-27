const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express()


//__dirname is the server...accessing the path of file, when we get into server we delete part and add the ../index

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../index.html'))
})

//PORT is in all caps and use or operator, heruku has its own env file where it stores its info, its a randomized server each timt its run. port is deployment and || is the local server
const port = process.env.PORT || 4005

app.listen(port, () => {console.log(`Listening on port ${port}`)})

