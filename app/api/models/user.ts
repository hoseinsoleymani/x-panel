import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
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
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
