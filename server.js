// requiring external modules
const express = require('express');
const app = express();

// instance module
const PORT = 5000;






// listining for port
app.listen(PORT, function () {
    console.log(`Running server from PORT ${PORT}!`)
});

module.exports = app;