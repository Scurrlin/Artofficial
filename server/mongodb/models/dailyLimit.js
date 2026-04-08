import mongoose from 'mongoose';

const DailyLimitSchema = new mongoose.Schema({
  date: { type: String, required: true, unique: true },
  total: { type: Number, default: 0 },
  models: { type: Map, of: Number, default: () => new Map() },
});

const DailyLimit = mongoose.model('DailyLimit', DailyLimitSchema);

export default DailyLimit;
