// server.js
// load the things we need
const express = require('express');
const app = express();

// index page 
app.get('/', function(req, res) {
    res.send('index');
});

// about page 
app.get('/about', function(req, res) {
    res.send('about');
});

app.listen(8080);
console.log('8080 is the magic port');