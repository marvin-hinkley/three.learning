var express         = require('express'),
    path            = require('path'),
    http            = require('http'),
    morgan          = require('morgan'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    mongooose       = require('mongoose'),
    app             = express(),
    io              = require('socket.io');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var server = http.createServer(app).listen(process.env.PORT || 8080, function(){}),
    socketServer = io.listen(server);

app.get('/*', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '/public') });
//    res.sendFile('dist/index.html');
});