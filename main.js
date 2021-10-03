const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const home = require('./routes/home');
const api = require('./routes/api');
const portNumber = 8888;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/static', express.static(__dirname + '/public', { maxAge: 1 }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', home);
app.use('/home', home);
app.use('/api', api);

const server = http.createServer(app);
server.listen(portNumber);
server.on('listening', () => {
    console.log(`Server listening on port ${portNumber}...`);
});

module.exports = server;
