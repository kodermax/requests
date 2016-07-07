import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const Schema = mongoose.Schema;
autoIncrement.initialize(mongoose.connection);
const requestSchema = new Schema({
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  fields: Schema.Types.Mixed,
  requestId: Number,
  status: {
    code: String,
    title: String
  },
  title: String,
},
  {
    timestamps: true,
  }
);
requestSchema.plugin(autoIncrement.plugin, { model: 'Request', field: 'requestId' });
export default mongoose.model('Request', requestSchema);
