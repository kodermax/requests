import mongoose from 'mongoose';
import { UserSchema } from './User';
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  author: UserSchema,
  fields: Schema.Types.Mixed,
  title: String,
},
  {
    timestamps: true,
  }
);
export default mongoose.model('Request', RequestSchema);
