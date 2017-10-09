// comment model

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var CommentSchema = new Schema({
context: String,
author: {type: Schema.Types.ObjectId, ref: 'user'},
meta: {like: Number, diss: Number},
created: { type: Date, default:Date.now },
published: {type: Boolean, default: false}
});

CommentSchema.virtual('date')
.get(function(){
  return this._id.getTimestamp();
});

mongoose.model('Comment', CommentSchema);

