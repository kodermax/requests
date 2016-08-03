import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    items: [{
      approval: {
        manager: Boolean,
        users: []
      },
      code: String,
      fields: [{
        code: String,
        default: String,
        title: String,
        type: {
          type: String
        }
      }],
      title: String
    }],
    title: String
  },
  {
    collection: 'requests_cats'
  }
);

export default mongoose.model('Category', categorySchema);
