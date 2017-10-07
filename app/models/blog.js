// blog model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var BlogSchema = new Schema({
  title: {type: String, required: true},
  context: {type: String, required: true},
  author: {type: Schema.Types.ObjectId},
  slug: {type: String, required: true},
  category: {type: Schema.Types.ObjectId},
  meta: {like: Number, diss: Number},
  created: { type: Date, default:Date.now },
  modfied: { type: Date, default:Date.now },
  published: {type: Boolean, default: false},
  comments: {type: Schema.Types.Mixed}
});

BlogSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Blog', BlogSchema);

