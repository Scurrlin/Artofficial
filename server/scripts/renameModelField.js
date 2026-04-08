import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

async function migrate() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log('Connected to MongoDB');

  const result = await mongoose.connection.db.collection('posts').updateMany(
    { model: { $exists: true } },
    { $rename: { model: 'modelId' } },
  );
  console.log(`Renamed model → modelId on ${result.modifiedCount} documents`);

  const remaining = await mongoose.connection.db.collection('posts').countDocuments({ model: { $exists: true } });
  console.log(`Documents still with old 'model' field: ${remaining}`);

  const withModelId = await mongoose.connection.db.collection('posts').countDocuments({ modelId: { $exists: true } });
  console.log(`Documents with 'modelId' field: ${withModelId}`);

  await mongoose.disconnect();
  console.log('Done.');
}

migrate().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});
