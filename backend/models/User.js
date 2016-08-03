import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  birthday: {
    type: String
  },
  btxId: {
    type: String
  },
  guid: {
    type: String
  },
  managerId: {
    type: Number
  },
  name: {
    type: String
  },
  lastName: {
    type: String
  },
  login: {
    type: String
  },
  position: {
    type: String
  },
  photo: {
    type: String
  },
  secondName: {
    type: String
  }
},
  {
    toJSON: {
      virtuals: true
    }
  }
);

userSchema.virtual('fullName').get(function getFullName () {
  return `${this.lastName} ${this.name} ${this.secondName}`;
});
userSchema.virtual('shortName').get(function getShortName () {
  if (this.secondName) {
    return `${this.lastName} ${this.name.charAt(0)}. ${this.secondName.charAt(0)}.`;
  }
  else {
    return `${this.lastName} ${this.name.charAt(0)}.`;
  }
});
export default mongoose.model('User', userSchema);
export {userSchema};
