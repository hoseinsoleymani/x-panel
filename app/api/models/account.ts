import mongoose from 'mongoose';

const AccountSchema = new mongoose.Schema(
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
      required: true,
    },
  },
  { collection: 'accounts' },
);

const Account =
  mongoose.models.accounts || mongoose.model('accounts', AccountSchema);

export default Account;
