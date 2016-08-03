import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const messageSchema = new Schema({
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  authorId: {type: Schema.Types.Number},
  message: {type: Schema.Types.String},
  request: {type: Schema.Types.ObjectId, ref: 'Request'}
},
  {
    timestamps: true,
    collection: 'requests_messages'
  }
);
export default mongoose.model('Message', messageSchema);
