import React from 'react';
import {
  GuideTabs,
  GuideTab,
  GuideFrame,
  GuidePrompt,
  GuideColumns,
  GuideAccordionGroup,
  GuideAccordion,
  GuideCallout,
  GuideImage,
} from '../../components/guide';

const CDN = 'https://res.cloudinary.com/dc8nheiuw/image/upload/guides/nano';

const nanoModel = `${CDN}/nano-model.png`;
const chairSketch = `${CDN}/chair-sketch.jpg`;
const manAndWoman = `${CDN}/man-and-woman.jpg`;
const couch = `${CDN}/couch.jpg`;
const californiaWeather = `${CDN}/california-weather.png`;
const korean = `${CDN}/korean.jpg`;
const newYork = `${CDN}/new-york.png`;
const originalDrink = `${CDN}/original-drink.jpg`;
const originalMan = `${CDN}/original-man.jpg`;
const originalPhoto = `${CDN}/original-photo.jpg`;
const whiteBanana = `${CDN}/white-banana.jpg`;
const originalHeadphones = `${CDN}/original-headphones.jpg`;

const PROSE = 'prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-white/80 prose-strong:text-white prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-white/90 prose-code:before:content-none prose-code:after:content-none prose-pre:bg-white/10 prose-pre:text-white/90 prose-a:text-[#6dadeb] prose-blockquote:border-[#6dadeb] prose-blockquote:text-white/70 prose-hr:border-white/20 prose-li:text-white/80 prose-th:text-white/90 prose-td:text-white/70 prose-thead:border-white/20 prose-tr:border-white/10';

const NanoGuide = () => (
  <article className={PROSE}>
    <h1 className="gradient-knockout">The Ultimate Nano Banana Prompting Guide</h1>
    <p>
      <em>
        Built on the Gemini&nbsp;3 family of models, Nano Banana models apply deep reasoning
        capabilities to fully understand your prompt before generating an image. This guide
        shares exactly what we learned testing Nano Banana&nbsp;2 and Nano Banana Pro against
        every use case we could imagine.
      </em>
    </p>

    <GuideCallout variant="info">
      <strong>What you&rsquo;ll learn:</strong>
      <ul className="mt-1.5 ml-1 space-y-1 list-disc pl-4">
        <li>Model overview</li>
        <li>Full tech specs breakdown</li>
        <li>Best practices for effective prompting</li>
        <li>Five prompting frameworks</li>
        <li>How Nano Banana works with Veo and Lyria</li>
      </ul>
    </GuideCallout>

    {/* ──────────────── Model Overview ──────────────── */}
    <h2>Model Overview</h2>
    <p>
      Nano Banana models are advanced image generation and editing models that use real-world
      knowledge and deep reasoning capabilities to deliver precise, rich visual results.
      Nano Banana&nbsp;2 shines in three key areas:
    </p>

    <h3>More Accurate Visuals</h3>
    <p>
      Nano Banana&nbsp;2 is powered by real-time information and images from web search. This means
      better educational tools, localized marketing, travel apps, and more.
    </p>

    <h3>Fast, Pro-Level Features</h3>
    <p>
      Premium features unlocked &mdash; from text rendering and translations, to upscaling to 2K/4K.
      Your creative teams can build cohesive narratives, storyboards, and product mockups.
    </p>

    <h3>Precision Control</h3>
    <p>
      Generate or edit images to fit any project requirement, with native support for 16:9, 9:16,
      2:1, and more. Expect vibrant lighting and richer textures, whether you&rsquo;re generating
      posters, marketing mockups, or ads.
    </p>

    {/* ──────────────── Tech Specs ──────────────── */}
    <h2>Breakdown of Tech Specs</h2>
    <p>
      Here is a breakdown of what Nano Banana&nbsp;2 and Nano Banana Pro can handle via
      the API and Vertex&nbsp;AI.
    </p>

    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Nano Banana 2 (Gemini 3.1 Flash Image)</th>
          <th>Nano Banana Pro (Gemini 3 Pro Image)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Context window</strong></td>
          <td>131,072 input tokens</td>
          <td>65,536 input tokens</td>
        </tr>
        <tr>
          <td><strong>Output tokens</strong></td>
          <td colSpan={2}>32,768 max</td>
        </tr>
        <tr>
          <td><strong>Resolutions</strong></td>
          <td>0.5K, 1K, 2K, 4K</td>
          <td>1K, 2K, 4K</td>
        </tr>
        <tr>
          <td><strong>Aspect ratios</strong></td>
          <td>1:1, 3:2, 2:3, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9, 21:9, 1:4, 4:1, 1:8, 8:1</td>
          <td>1:1, 3:2, 2:3, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9, 21:9</td>
        </tr>
        <tr>
          <td><strong>Image inputs</strong></td>
          <td colSpan={2}>Up to 14 reference images per prompt (PNG, JPEG, WebP, HEIC, HEIF)</td>
        </tr>
        <tr>
          <td><strong>Document inputs</strong></td>
          <td colSpan={2}>Text &amp; PDF &mdash; 50&nbsp;MB via API / Cloud Storage, 7&nbsp;MB via console</td>
        </tr>
        <tr>
          <td><strong>Outputs</strong></td>
          <td colSpan={2}>Text and images</td>
        </tr>
        <tr>
          <td><strong>Knowledge cutoff</strong></td>
          <td colSpan={2}>January 2025</td>
        </tr>
        <tr>
          <td><strong>Live data</strong></td>
          <td colSpan={2}>Real-time information from web search</td>
        </tr>
        <tr>
          <td><strong>Trust &amp; safety</strong></td>
          <td colSpan={2}>C2PA Content Credentials + SynthID watermark</td>
        </tr>
      </tbody>
    </table>

    {/* ──────────────── Best Practices ──────────────── */}
    <h2>Best Practices for Effective Prompting</h2>
    <p>
      When it comes to effective prompting, there are a few ways to ensure the visual you get
      is the visual you asked for:
    </p>
    <ul>
      <li>
        <strong>Be specific:</strong> Provide concrete details on subject, lighting, and composition.
      </li>
      <li>
        <strong>Use positive framing:</strong> Describe what you want, not what you don&rsquo;t want
        (e.g., &ldquo;empty street&rdquo; instead of &ldquo;no cars&rdquo;).
      </li>
      <li>
        <strong>Control the camera:</strong> Use photographic and cinematic terms
        like &ldquo;low angle&rdquo; and &ldquo;aerial view.&rdquo;
      </li>
      <li>
        <strong>Iterate:</strong> Refine images with follow-up prompts in a conversational manner.
      </li>
    </ul>

    <GuideCallout variant="tip">
      Start a prompt with a <strong>strong verb</strong> that tells the model the primary operation
      you want to perform.
    </GuideCallout>

    {/* ──────────────── Five Prompting Frameworks ──────────────── */}
    <h2>Five Prompting Frameworks</h2>

    {/* ── 1. Image Generation ── */}
    <h3>1. Image Generation</h3>
    <p>
      When generating an image, your prompt structure depends entirely on whether you are using
      reference images or relying solely on text.
    </p>

    <GuideTabs>
      <GuideTab title="Text-to-Image">
        <h4>Text-to-Image Generation (Without References)</h4>
        <p>
          When starting with a blank canvas, you are the director. A simple list of keywords
          won&rsquo;t cut it; you need to describe the scene narratively.
        </p>
        <p>
          <strong>Formula:</strong>{' '}
          <code>[Subject]</code> + <code>[Action]</code> + <code>[Location/context]</code> +{' '}
          <code>[Composition]</code> + <code>[Style]</code>
        </p>

        <GuidePrompt description="A striking fashion model wearing a tailored brown dress, sleek boots, and holding a structured handbag. Posing with a confident, statuesque stance, slightly turned. A seamless, deep cherry red studio backdrop. Medium-full shot, center-framed. Fashion magazine style editorial, shot on medium-format analog film, pronounced grain, high saturation, cinematic lighting effect.">
          <strong>Subject:</strong> fashion model in tailored brown dress &bull;{' '}
          <strong>Action:</strong> confident statuesque pose &bull;{' '}
          <strong>Location:</strong> cherry red studio backdrop &bull;{' '}
          <strong>Composition:</strong> medium-full, center-framed &bull;{' '}
          <strong>Style:</strong> editorial, medium-format analog film
        </GuidePrompt>

        <GuideFrame borderless>
          <GuideImage className="w-full" src={nanoModel} alt="Fashion model in tailored brown dress on cherry red backdrop — editorial style" aspectRatio="1 / 1" />
        </GuideFrame>
      </GuideTab>

      <GuideTab title="Multimodal">
        <h4>Multimodal Generation (With References)</h4>
        <p>
          Gemini allows you to combine multiple reference images to guide the final output.
          This is perfect for maintaining character consistency or merging a specific product
          into a new environment.
        </p>
        <p>
          <strong>Formula:</strong>{' '}
          <code>[Reference images]</code> + <code>[Relationship instruction]</code> +{' '}
          <code>[New scenario]</code>
        </p>

        <GuidePrompt description="Using the attached napkin sketch as the structure and the attached fabric sample as the texture, transform this into a high-fidelity 3D armchair render. Place it in a sun-drenched, minimalist living room.">
          <strong>References:</strong> napkin sketch + fabric sample &bull;{' '}
          <strong>Relationship:</strong> structure + texture &bull;{' '}
          <strong>Scenario:</strong> 3D armchair in minimalist living room
        </GuidePrompt>

        <GuideCallout variant="note">
          Nano Banana generated the source images for these examples as well.
        </GuideCallout>

        <GuideFrame caption="Napkin sketch + fabric sample → 3D armchair render" bg="white">
          <GuideImage className="w-full border-[10px] border-white rounded-lg" src={chairSketch} alt="Napkin sketch and fabric sample combined into a 3D armchair render in a minimalist living room" aspectRatio="1999 / 1653" />
        </GuideFrame>
      </GuideTab>
    </GuideTabs>

    {/* ── 2. Image Editing ── */}
    <h3>2. Image Editing</h3>
    <p>
      Editing requires a different mindset than generating. You already have a base image;
      your prompt needs to focus on <strong>what is changing</strong> and{' '}
      <strong>what is staying the same</strong>.
    </p>

    <GuideTabs>
      <GuideTab title="Conversational Editing">
        <h4>Conversational Editing (Without New References)</h4>
        <p>
          When you generate an image and want to tweak it conversationally:
        </p>
        <p>
          <strong>Semantic masking (inpainting):</strong> You can define
          a &ldquo;mask&rdquo; through text to edit a specific part of an image while leaving the
          rest untouched.
        </p>

        <GuideCallout variant="tip">
          Be explicit about what to keep exactly the same.
        </GuideCallout>

        <GuidePrompt description="Remove the man from the photo." />

        <GuideFrame caption="Before & after: man removed from photo" bg="white">
          <GuideImage className="w-full border-[10px] border-white rounded-lg" src={manAndWoman} alt="Before and after comparison — man removed from photo" aspectRatio="1577 / 1800" />
        </GuideFrame>
      </GuideTab>

      <GuideTab title="Composition &amp; Style Transfer">
        <h4>Composition and Style Transfer (With New References)</h4>
        <p>Bring new images into the prompt to alter an existing one:</p>
        <ul>
          <li>
            <strong>Adding elements:</strong> Upload a base image and an object image, and tell
            the model to combine them.
          </li>
          <li>
            <strong>Style transfer:</strong> Upload a photo and ask the model to recreate its exact
            content in a different artistic style, such as transforming a photo of a modern city
            street into a Van Gogh-style painting.
          </li>
        </ul>

        <GuideFrame caption="Composition: adding elements" bg="white">
          <GuideImage className="w-full border-[10px] border-white rounded-lg" src={couch} alt="Composition example — adding elements to a scene" aspectRatio="1300 / 461" />
        </GuideFrame>
        <GuideFrame caption="Style transfer: photo to painting" bg="white">
          <GuideImage className="w-full border-[10px] border-white rounded-lg" src={originalPhoto} alt="Style transfer example — photo converted to painting style" aspectRatio="1999 / 1124" />
        </GuideFrame>
      </GuideTab>
    </GuideTabs>

    {/* ── 3. Real-time Information ── */}
    <h3>3. Real-Time Information from Web Search</h3>
    <p>
      Gemini Image models can actively search the web to generate images based on real-time
      information. Instead of describing a fictional scene, you instruct the model to retrieve
      real-world data and then specify how to visualize it.
    </p>
    <p>
      <strong>Formula:</strong>{' '}
      <code>[Source / Search request]</code> + <code>[Analytical task]</code> +{' '}
      <code>[Visual translation]</code>
    </p>

    <GuidePrompt description="Search for current weather and date in San Francisco. Analytically, use this data to modify the scene (e.g., if raining, make it look grey and rainy). Visualize this in a miniature city-in-a-cup concept embedded within a realistic, modern smartphone UI.">
      <strong>Source:</strong> current SF weather &bull;{' '}
      <strong>Analysis:</strong> modify scene to match conditions &bull;{' '}
      <strong>Visual:</strong> city-in-a-cup on smartphone UI
    </GuidePrompt>

    <GuideFrame borderless>
      <GuideImage className="w-full" src={californiaWeather} alt="City-in-a-cup smartphone UI — weather-reactive visualization" aspectRatio="1 / 1" />
    </GuideFrame>

    <GuideCallout variant="info">
      Nano Banana&nbsp;2 is powered by real-time information and images from web search. This
      feature is coming soon to Vertex&nbsp;AI, and will help your teams create more accurate
      visuals.
    </GuideCallout>

    {/* ── 4. Text Rendering & Localization ── */}
    <h3>4. Text Rendering &amp; Localization</h3>
    <p>
      Nano Banana&nbsp;2 and Nano Banana Pro excel at rendering sharp, legible text for impactful
      posters, diagrams, and product mockups. They support state-of-the-art multilingual text
      generation in over 10 languages.
    </p>
    <p>To get the best typographic results, follow these rules:</p>
    <ul>
      <li>
        <strong>Use quotes:</strong> Enclose your desired words in quotes
        (e.g., &ldquo;Happy Birthday&rdquo; or &ldquo;URBAN EXPLORER&rdquo;).
      </li>
      <li>
        <strong>Choose a font:</strong> Describe the typography style or name of the font.
        Prompt for a &ldquo;bold, white, sans-serif font&rdquo; or &ldquo;Century Gothic 12px font.&rdquo;
      </li>
      <li>
        <strong>Translate and localize:</strong> Write your prompt in one language and specify a
        target language for the text output.
      </li>
      <li>
        <strong>Text-first hack:</strong> When generating text for an image, Gemini Image models
        work best if you first converse with it to generate the text concepts, and then ask for
        an image with that text.
      </li>
    </ul>

    <GuideTabs>
      <GuideTab title="Product Mockup">
        <GuidePrompt description='A high-end, glossy commercial beauty shot of a sleek, minimalist nude-colored face moisturizer jar resting on a warm studio background. The lighting is soft and radiant. Next to the product, render three lines of text with the following exact styling: For the top line, the word "GLOW" in a flowing, elegant Brush Script font. For the middle line, the text "10% OFF" in a heavy, blocky Impact font. For the bottom line, the text "Your First Order" in a thin, minimalist Century Gothic font. Then translate the text into Korean and Arabic.' />

        <GuideFrame caption="Multilingual text rendering: English, Korean & Arabic" bg="white">
          <GuideImage className="w-full border-[10px] border-white rounded-lg" src={korean} alt="Moisturizer mockup rendered in English, Korean, and Arabic" aspectRatio="1200 / 379" />
        </GuideFrame>
      </GuideTab>

      <GuideTab title="Typographic Poster">
        <GuidePrompt description='A typographic poster with a solid black background, bold letters spell "New York", filling the center of the frame. The text acts as a cut-out window. A photograph of New York skyline is visible ONLY inside the letterforms.' />

        <GuideFrame caption="Typographic poster: New York skyline through letterforms" borderless>
          <GuideImage className="w-full" src={newYork} alt="New York typographic poster — skyline through letterforms" aspectRatio="1 / 1" />
        </GuideFrame>
      </GuideTab>
    </GuideTabs>

    {/* ── 5. Prompting Like a Creative Director ── */}
    <h3>5. Prompting Like a Creative Director</h3>
    <p>
      To elevate your results from good to breathtaking, you need to stop typing keywords and
      start directing the scene. The Gemini image models offer studio-quality controls.
    </p>

    <GuideAccordionGroup>
      <GuideAccordion title="1. Design Your Lighting">
        <p>Tell the model exactly how the scene is illuminated.</p>
        <ul>
          <li>
            <strong>Studio setups:</strong> Ask for a &ldquo;three-point softbox setup&rdquo; to
            evenly light a product.
          </li>
          <li>
            <strong>Dramatic effects:</strong> Prompt for &ldquo;Chiaroscuro lighting with harsh,
            high contrast&rdquo; or &ldquo;Golden hour backlighting creating long shadows.&rdquo;
          </li>
        </ul>
        <GuideFrame caption="Lighting techniques: softbox setup & chiaroscuro / golden hour" bg="white">
          <GuideImage className="w-full border-[10px] border-white rounded-lg" src={originalDrink} alt="Lighting examples — three-point softbox setup and chiaroscuro golden hour" aspectRatio="55 / 16" />
        </GuideFrame>
      </GuideAccordion>

      <GuideAccordion title="2. Choose Your Camera, Lens &amp; Focus">
        <p>Use specific hardware and photographic terminology to control depth, distortion, and perspective.</p>
        <ul>
          <li>
            <strong>Hardware:</strong> Dictate the exact camera type to change the visual DNA of the
            image. Ask for the shot to be taken on a GoPro for an immersive, distorted action feel,
            a Fujifilm camera for authentic color science, or a cheap disposable camera for a raw,
            nostalgic flash aesthetic.
          </li>
          <li>
            <strong>Lens:</strong> Force the perspective by explicitly requesting a &ldquo;low-angle
            shot with a shallow depth of field (f/1.8).&rdquo; For vast scale, ask for
            a &ldquo;wide-angle lens.&rdquo; For intricate details, specify a &ldquo;macro lens.&rdquo;
          </li>
        </ul>
        <GuideFrame caption="Camera emulation: GoPro, Fujifilm & disposable camera styles" bg="white">
          <GuideImage className="w-full border-[10px] border-white rounded-lg" src={originalMan} alt="Camera emulation comparison — GoPro, Fujifilm color science, and disposable camera styles" aspectRatio="550 / 169" />
        </GuideFrame>
      </GuideAccordion>

      <GuideAccordion title="3. Define Color Grading &amp; Film Stock">
        <p>The texture and color of the final image set the emotional tone.</p>
        <ul>
          <li>
            For a nostalgic or gritty vibe, tell the model to render the image &ldquo;as if
            on 1980s color film, slightly grainy.&rdquo;
          </li>
          <li>
            For a modern, moody aesthetic, ask for &ldquo;Cinematic color grading with muted
            teal tones.&rdquo;
          </li>
        </ul>
        <GuideFrame caption="Color grading: 1980s film & cinematic muted teal" bg="white">
          <GuideImage className="w-full border-[10px] border-white rounded-lg" src={originalHeadphones} alt="Color grading comparison — 1980s film grain and modern cinematic muted teal" aspectRatio="25 / 8" />
        </GuideFrame>
      </GuideAccordion>

      <GuideAccordion title="4. Emphasize Materiality &amp; Texture">
        <p>
          When generating logos, products, or characters, define their physical makeup.
          Don&rsquo;t just ask for a suit jacket; ask for &ldquo;navy blue tweed.&rdquo; Instead
          of &ldquo;armor,&rdquo; describe &ldquo;ornate elven plate armor, etched with silver
          leaf patterns.&rdquo; If you are designing a mockup, specify the surface,
          like a &ldquo;minimalist ceramic coffee mug.&rdquo;
        </p>
        <GuideFrame caption="Materiality & texture: tweed jacket & elven plate armor" bg="white">
          <GuideImage className="w-full border-[10px] border-white rounded-lg" src={whiteBanana} alt="Materiality examples — navy blue tweed jacket and ornate elven plate armor" aspectRatio="1800 / 887" />
        </GuideFrame>
      </GuideAccordion>
    </GuideAccordionGroup>

    {/* ──────────────── Go Further ──────────────── */}
    <h2>Go Further</h2>
    <p>
      Nano Banana Pro and Nano Banana&nbsp;2 are designed to work seamlessly with other generative
      creation models:
    </p>

    <ol>
      <li>
        <strong>Nano Banana + Gemini:</strong> Gemini&nbsp;3 can help you create prompts and provide
        creative direction.
      </li>
      <li>
        <strong>Nano Banana + Veo:</strong> Create keyframes with Nano Banana to direct an animation,
        then use Veo to generate the video between them.
      </li>
      <li>
        <strong>Nano Banana + Veo + Lyria:</strong> Generate your project&rsquo;s visuals, then add a
        custom AI soundtrack with Lyria.
      </li>
    </ol>
  </article>
);

export default NanoGuide;
