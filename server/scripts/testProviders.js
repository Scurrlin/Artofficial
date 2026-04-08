import dotenv from 'dotenv';

dotenv.config();

const TEST_PROMPT = 'A small red cube on a white background';

async function testOpenAI() {
  console.log('\n--- Testing OpenAI (gpt-image-1.5) ---');
  try {
    const { generate } = await import('../services/providers/openai.js');
    const result = await generate(TEST_PROMPT);
    console.log(`  OK – received ${result.base64.length} chars of base64`);
  } catch (err) {
    console.error(`  FAILED: ${err.message}`);
  }
}

async function testGoogle() {
  console.log('\n--- Testing Google Imagen (nano-banana-2) ---');
  try {
    const { generate } = await import('../services/providers/google.js');
    const result = await generate(TEST_PROMPT);
    console.log(`  OK – received ${result.base64.length} chars of base64`);
  } catch (err) {
    console.error(`  FAILED: ${err.message}`);
  }
}

async function testBFL() {
  console.log('\n--- Testing Black Forest Labs / Replicate (flux-2) ---');
  try {
    const { generate } = await import('../services/providers/blackForestLabs.js');
    const result = await generate(TEST_PROMPT);
    console.log(`  OK – received ${result.base64.length} chars of base64`);
  } catch (err) {
    console.error(`  FAILED: ${err.message}`);
  }
}

console.log('Provider test starting...');
console.log('Prompt:', TEST_PROMPT);

await testOpenAI();
await testGoogle();
await testBFL();

console.log('\nAll tests complete.');
