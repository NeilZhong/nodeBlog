// comment model

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var CommentSchema = new Schema({
context: String,
author: {type: Schema.Types.ObjectId, ref: 'User'},
meta: {like: Number, diss: Number},
created: { type: Date, default:Date.now }
});

CommentSchema.virtual('date')
.get(function(){
  return this._id.getTimestamp();
});

mongoose.model('Comment', CommentSchema);

