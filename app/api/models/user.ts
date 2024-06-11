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
    name: {
      type: String,
      required: true,
      maxlength: 60,
    },
    wallet: {
      inventory: {
        type: String,
        required: true,
      },
    },
    accountStatus: {
      type: String,
      enum: ['active', 'deactive'],
      default: 'active',
    },
    prices: {
      traffic: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      limit: {
        type: String,
        required: true,
      },
    },
    accounts: {
      type: [
        {
          amount: {
            type: String,
            required: true,
          },
          userLimit: {
            type: String,
            required: true,
          },
          accountName: {
            type: String,
            required: true,
          },
          expireTime: {
            type: Date,
            required: true,
          },
          serverType: {
            type: String,
            required: false,
          },
        },
      ],
      default: [],
    },
  },
  { collection: 'users' },
);

const User = mongoose.models.users || mongoose.model('users', UserSchema);

export default User;
