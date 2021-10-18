// requiring external modules
const express = require('express');
const app = express();

// instance module
const PORT = 5000;


// listening for a GET req
app.get('/', function(req, res){
    res.send('Hey Grub Lovers!')
})



// listining for port
app.listen(PORT, function () {
    console.log(`Running server from PORT ${PORT}!`)
});

module.exports = app;