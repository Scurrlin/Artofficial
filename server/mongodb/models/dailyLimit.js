import mongoose from 'mongoose';

const DailyLimitSchema = new mongoose.Schema({
  date: { type: String, required: true, unique: true },
  count: { type: Number, default: 0 },
});

const DailyLimit = mongoose.model('DailyLimit', DailyLimitSchema);

export default DailyLimit;
