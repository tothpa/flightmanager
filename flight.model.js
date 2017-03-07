'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FlightSchema = new Schema({
    airplane: {type: String,require: true},
    pilot: {type: String,require: true},
    coPilot: String,
    takeoffTime: Date,
    takeoffAirfield: {type: Schema.ObjectId, ref:'Airfield' ,require: false},
    LandingTime: Date,
    LandingAirfield: String,
    flightTimeMins: Number,
    registrationTime: {type: Date, default: Date.now, require: true} 
})

module.exports = mongoose.model('Flight',FlightSchema);
