import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  birthday: {
    type: String,
  },
  btxId: {
    type: String,
  },
  guid: {
    type: String,
  },
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  login: {
    type: String,
  },
  position: {
    type: String,
  },
  photo: {
    type: String,
  },
  secondName: {
    type: String,
  },
},
  {
    toJSON: {
      virtuals: true,
    },
  }
);
userSchema.virtual('fullName').get(function getFullName() {
  return `${this.lastName} ${this.name} ${this.secondName}`;
});

export default mongoose.model('User', userSchema);
