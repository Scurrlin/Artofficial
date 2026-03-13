import mongoose from 'mongoose';

const connectDB = async (url) => {
  mongoose.set('strictQuery', true);
  try {
    await mongoose.connect(url);
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ Failed to connect to MongoDB');
    console.error(err);
    console.error('\nPlease check your MONGODB_URL and ensure MongoDB is accessible.');
    process.exit(1);
  }
};

export default connectDB;