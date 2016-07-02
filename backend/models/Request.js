import mongoose from 'mongoose';
import { userSchema } from './User';
import autoIncrement from 'mongoose-auto-increment';

const Schema = mongoose.Schema;
autoIncrement.initialize(mongoose.connection);

const requestSchema = new Schema({
  author: userSchema,
  fields: Schema.Types.Mixed,
  requestId: Number,
  title: String,
},
  {
    timestamps: true,
  }
);
requestSchema.plugin(autoIncrement.plugin, { model: 'Request', field: 'requestId' });
export default mongoose.model('Request', requestSchema);
