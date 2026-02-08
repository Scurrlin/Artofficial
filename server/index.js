import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import imageRoutes from './routes/imageRoutes.js';

dotenv.config();

// Validate required environment variables
const requiredEnvVars = [
  'MONGODB_URL',
  'PORT',
  'OPENAI_API_KEY',
  'CLOUDINARY_CLOUD_NAME',
  'CLOUDINARY_API_KEY',
  'CLOUDINARY_API_SECRET',
];

const missingEnvVars = requiredEnvVars.filter((varName) => !process.env[varName]);

if (missingEnvVars.length > 0) {
  console.error('❌ Missing required environment variables:');
  missingEnvVars.forEach((varName) => console.error(`   - ${varName}`));
  console.error('\nPlease add these to your .env file and restart the server.');
  process.exit(1);
}

const app = express();

// Configure CORS with specific origins
const allowedOrigins = [
  'https://www.artofficial.fun',
  'https://artofficial.fun',
  'http://localhost:5173',
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
}));

app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/image', imageRoutes);

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from GPT Image 1.5!',
  });
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);

    app.listen(process.env.PORT, () => console.log("Server started on port", process.env.PORT ));
  } catch (error) {
    console.error('Error starting the server:', error);
  }
};

startServer();