import mongoose from 'mongoose';

const SettingSchema = new mongoose.Schema(
  {
    minTraffic: {
      type: String,
      required: true,
    },
    maxTraffic: {
      type: String,
      required: true,
    },
    minExpirationTime: {
      type: String,
      required: true,
    },
    maxExpirationTime: {
      type: String,
      required: true,
    },
    maxUserLimit: {
      type: String,
      required: true,
    },
  },
  { collection: 'settings' },
);

const Setting =
  mongoose.models.settings || mongoose.model('settings', SettingSchema);

export default Setting;
