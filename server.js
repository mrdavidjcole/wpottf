// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/WistiaPlayerOverpass.ttf', function (req, res, next) {
  var options = {
    headers: {
      'Content-Type': 'font/ttf',
    }
  };
  res.sendFile(__dirname + '/WistiaPlayerOverpass.ttf', options);
});

app.get('/wpol.woff', function (req, res, next) {
  var options = {
    headers: {
      'Content-Type': 'font/woff',
    }
  };
  res.sendFile(__dirname + '/wpol.woff', options);
});

app.get('/robot.woff', function (req, res, next) {
  var options = {
    headers: {
      'Content-Type': 'font/woff',
    }
  };
  res.sendFile(__dirname + '/roboto.woff', options);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
