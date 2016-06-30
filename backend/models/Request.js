import mongoose from 'mongoose';
import User from './User';
const Schema = mongoose.Schema;

const requestSchema = new Schema({
  author: User,
  changed: Date,
  created: Date,
  fields: Schema.Types.Mixed,
  title: String,
});
export default mongoose.model('Request', requestSchema);
