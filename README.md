# Art/official
A full MERN stack [AI image generator](https://www.artofficial.fun/) powered by OpenAI's GPT Image 1.5.

![banner_image](/client/public/Artofficial_thumbnail-min.png)

## Technologies Used
* OpenAI's GPT Image 1.5
* Cloudinary
* React.js
* MongoDB
* Express
* Node.js
* Hostinger

## Testing

The client has a test suite built with **Vitest**, **Testing Library**, and **Playwright**.

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

### CI script (used by AWS CodeBuild)

Runs Vitest with JUnit output and Playwright in a single pass:

```bash
npm run test:ci
```