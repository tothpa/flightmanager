'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PilotSchema = new Schema({
    name: {type: String,require: true},
    username: String,    
    email: String, 
    totalFlightTime: Number,
    totalTakeoffs: Number,
    creationTime: {type: Date, default: Date.now, require: true} 
})

module.exports = mongoose.model('Pilot',PilotSchema);
