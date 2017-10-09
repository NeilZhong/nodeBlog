// blog model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var BlogSchema = new Schema({
  title: String,
  context: String,
  author: {type: Schema.Types.ObjectId, ref: 'user'},
  slug: String,
  category: {type: Schema.Types.ObjectId, ref: 'category'},
  meta: {like: Number, diss: Number},
  created: { type: Date, default:Date.now },
  modfied: { type: Date, default:Date.now },
  published: {type: Boolean, default: false},
  comments: [{type: Schema.Types.ObjectId, ref: 'comment'}]
});

BlogSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Blog', BlogSchema);

