# Art/official
A full MERN stack [AI image generator](https://www.artofficial.fun/) powered by cutting edge models from OpenAI, Google, and Black Forest Labs.

![banner_image](/client/public/Artofficial_thumbnail-min.png)

## Technologies Used
* GPT Image 1.5 (OpenAI)
* Nano Banana 2 (Google)
* Flux 2 (Black Forest Labs)
* Cloudinary
* React.js
* MongoDB
* Express
* Node.js
* Hostinger

## Environment Variables

### Client (`client/.env`)

```
VITE_BACKEND_URL="https://your-backend-url.com"
```

### Server (`server/.env`)

```
OPENAI_API_KEY=your-openai-api-key
GOOGLE_API_KEY=your-google-api-key
REPLICATE_API_TOKEN=your-replicate-api-token
PORT=8080
MONGODB_URL=your-mongodb-connection-string
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
```

## Testing

The client directory includes a multi-layer test suite built with **Vitest**, **Testing Library**, and **Playwright**. Here's how to run it:

### Setup

```bash
cd client
npm install
npx playwright install chromium
```

### Run unit / component tests

```bash
npm test
```

Watch mode (re-runs on file changes):

```bash
npm run test:watch
```

### Run the end-to-end browser test

Requires the Vite dev server (started automatically by Playwright):

```bash
npm run test:e2e
```