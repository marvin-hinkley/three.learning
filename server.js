var express         = require('express'),
    path            = require('path'),
    http            = require('http'),
    morgan          = require('morgan'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    app             = express()

app.use(express.static(__dirname + '/client'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var server = http.createServer(app).listen(process.env.PORT || 80, function(){
    console.log('Server started at port 80 with PID ' + process.pid);
})



app.get('/*', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '/client') });
});