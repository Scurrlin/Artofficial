import mongoose from 'mongoose';

const connectDB = (url) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => {
      console.error('❌ Failed to connect to MongoDB');
      console.error(err);
      console.error('\nPlease check your MONGODB_URL and ensure MongoDB is accessible.');
      process.exit(1);
    });
};

export default connectDB;