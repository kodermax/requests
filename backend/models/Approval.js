import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const approvalSchema = new mongoose.Schema(
  {
    approvers: [{
      comment: String,
      date: Date,
      result: Number,
      user: {type: Schema.Types.ObjectId, ref: 'User'},
      userId: Number
    }],
    request: {type: Schema.Types.ObjectId, ref: 'Request'},
    requestId: Number
  },
  {
    collection: 'requests_approval'
  }
);

export default mongoose.model('Approval', approvalSchema);
