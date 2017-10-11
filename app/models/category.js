// Category model

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var CategorySchema = new Schema({
name: String,
slug: String,
created: { type: Date, default:Date.now }
});

CategorySchema.virtual('date')
.get(function(){
  return this._id.getTimestamp();
});

mongoose.model('Category', CategorySchema);

