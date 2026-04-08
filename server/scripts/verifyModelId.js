import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const PostSchema = new mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
  modelId: { type: String, default: 'gpt-image-1.5' },
}, { timestamps: true });
const Post = mongoose.model('Post', PostSchema);

await mongoose.connect(process.env.MONGODB_URL);
console.log('Connected');

const test = await Post.create({
  name: '__test__',
  prompt: 'test prompt',
  photo: 'https://test.com/photo.png',
  modelId: 'flux-2',
});
console.log('Created doc _id:', test._id.toString());
console.log('Mongoose doc modelId:', test.modelId);

const raw = await mongoose.connection.db.collection('posts').findOne({ _id: test._id });
console.log('Raw MongoDB modelId:', raw.modelId);

await Post.deleteOne({ _id: test._id });
console.log('Test doc cleaned up');

await mongoose.disconnect();
