import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      maxlength: 60,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      maxlength: 60,
    },
  },
  { collection: 'users' },
);

const User = mongoose.models.users || mongoose.model('users', UserSchema);

export default User;
