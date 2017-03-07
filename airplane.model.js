'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AirplaneSchema = new Schema({
    airplaneModel: {type: String,require: true},
    manufacturer: String,
    tailNumber: {type: String,require: true},
    totalTakeoffs: Number,
    totalFlightHours: Number,
    flightHoursSinceLastMaintenance: Number,
    nextMaintenanceByDate: Date,
    nextMaintenanceByHours: Number,
    nextMaintenanceByTakeoffs: Number,
    lastTakeoffDate: Date,
    registrationTime: {type: Date, default: Date.now, require: true} 
})

module.exports = mongoose.model('Airplane',AirplaneSchema);
