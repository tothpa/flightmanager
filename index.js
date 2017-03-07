var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Flight = require('./Flight.model');
var Airfield = require('./Airfield.model');

var port = 8080;
var db = 'mongodb://localhost/local'

mongoose.connect(db);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/flights', function(req, res) {
  console.log('getting all foo');
  Flight.find({})
    .exec(function(err, flights) {
      if(err) {
        res.send('error occured')
      } else {
        console.log(flights);
        res.json(flights);
      }
    });
});

app.get('/airfields', function(req, res) {
  console.log('getting all airfields');
  Airfield.find({})
    .exec(function(err, airfields) {
      if(err) {
        res.send('error occured')
      } else {
        console.log(airfields);
        res.json(airfields);
      }
    });
});

app.post('/flight', function(req, res) {
  var newFlight = new Flight();
  newFlight.airplane = req.body.airplane;
  newFlight.pilot = req.body.pilot;

   newFlight.save(function(err, flight) {
    if(err) {
      res.send('error saving flight');
    } else {
      console.log(flight);
      res.send(flight);
    }
  });

  });

  app.post('/airfield', function(req, res) {
      var newAirfield= new Airfield();
      newAirfield.name = req.body.name;
      newAirfield.nativeName = req.body.nativeName;
      newAirfield.icao = req.body.icao;
      newAirfield.lat = req.body.lat;
      newAirfield.long = req.body.long;
      newAirfield.runwayInfo = req.body.runwayInfo;
      newAirfield.radio = req.body.radio;
      newAirfield.status = req.body.status;
      newAirfield.qNHAltMeter = req.body.qNHAltMeter;
      newAirfield.qNHAltFt = req.body.qNHAltFt;

   newAirfield.save(function(err, airfield) {
    if(err) {
      res.send('error saving airfield');
    } else {
      console.log(airfield);
      res.send(airfield);
    }
  });

});

app.listen(port, function() {
  console.log('app listening on port ' + port);
})