'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AirfieldSchema = new Schema({
    name: {type: String,require: true},
    nativeName: {type: String,require: false},
    icao: {type: String,require: false},
    lat: String,
    long: String,
    runwayInfo: String,
    radio: Number,
    status: String,
    qNHAltMeter: Number,
    qNHAltFt: Number,
    creationTime: {type: Date, default: Date.now, require: true} 
})

module.exports = mongoose.model('Airfield',AirfieldSchema);
