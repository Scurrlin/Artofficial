import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
  model: { type: String, default: 'gpt-image-1.5' },
}, { timestamps: true });

const Post = mongoose.model('Post', PostSchema);

export default Post;