import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema(
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
  { collection: 'admins' },
);

const Admin = mongoose.models.admins || mongoose.model('admins', AdminSchema);

export default Admin;
