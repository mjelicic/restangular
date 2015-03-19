'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,

  comments: []

});

module.exports = mongoose.model('Thing', ThingSchema);
