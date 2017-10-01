// blog model

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var BlogSchema = new Schema({
title: String,
url: String,
text: String
});

BlogSchema.virtual('date')
.get(function(){
  return this._id.getTimestamp();
});

mongoose.model('Blog', BlogSchema);

