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
  GuideCodeBlock,
} from '../../components/guide';

import infographicCoffee from '../images/output_images/infographic_coffee_machine.png';
import infographicCoffeeSp from '../images/output_images/infographic_coffee_machine_sp.png';
import photorealism from '../images/output_images/photorealism.png';
import worldKnowledge from '../images/output_images/world_knowledge.png';
import logo1 from '../images/output_images/logo_generation_1.png';
import logo2 from '../images/output_images/logo_generation_2.png';
import logo3 from '../images/output_images/logo_generation_3.png';
import logo4 from '../images/output_images/logo_generation_4.png';
import comicReel from '../images/output_images/comic-reel.png';
import uiFarmersMarket from '../images/output_images/ui_farmers_market.png';
import pixelsInput from '../images/input_images/pixels.png';
import motorcycle from '../images/output_images/motorcycle.png';
import womanInMuseum from '../images/input_images/woman_in_museum.png';
import tankTop from '../images/input_images/tank_top.png';
import jacket from '../images/input_images/jacket.png';
import boots from '../images/input_images/boots.png';
import outfit from '../images/output_images/outfit.png';
import drawingsInput from '../images/input_images/drawings.png';
import realisticValley from '../images/output_images/realistic_valley.png';
import shampooInput from '../images/input_images/shampoo.png';
import extractProduct from '../images/output_images/extract_product.png';
import billboard from '../images/output_images/billboard.png';
import billboardWinter from '../images/output_images/billboard_winter.png';
import manWithFlower from '../images/output_images/man_with_flower.png';
import manWithFlowerNoStripes from '../images/output_images/man_with_flower_no_stripes.png';
import manWithBlueHat from '../images/output_images/man_with_blue_hat.png';
import scene from '../images/output_images/scene.png';
import testWoman from '../images/output_images/test_woman.png';
import testWoman2 from '../images/output_images/test_woman_2.png';
import testWomanWithDog from '../images/output_images/test_woman_with_dog.png';
import kitchenInput from '../images/input_images/kitchen.jpeg';
import kitchenChairs from '../images/output_images/kitchen-chairs.png';
import holidayCard from '../images/output_images/christmas_holiday_card_teddy.png';
import collectibleAirplane from '../images/output_images/christmas_collectible_toy_airplane.png';
import childrensBook1 from '../images/output_images/childrens_book_illustration_1.png';
import childrensBook2 from '../images/output_images/childrens_book_illustration_2.png';

const PROSE = 'prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-white/80 prose-strong:text-white prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-white/90 prose-code:before:content-none prose-code:after:content-none prose-pre:bg-white/10 prose-pre:text-white/90 prose-a:text-[#6dadeb] prose-blockquote:border-[#6dadeb] prose-blockquote:text-white/70 prose-hr:border-white/20 prose-li:text-white/80 prose-th:text-white/90 prose-td:text-white/70 prose-thead:border-white/20 prose-tr:border-white/10';

const GptImageGuide = () => (
  <article className={PROSE}>
    <h1>gpt-image-1.5 Prompting Guide</h1>

    {/* ──────────────── 1. Introduction ──────────────── */}
    <h2>1. Introduction</h2>
    <p>
      <code>gpt-image-1.5</code> is our latest image generation model, designed for production-quality visuals and highly controllable creative workflows. It delivers major improvements in realism, accuracy, and editability, making it well-suited for both professional design tasks and iterative content creation. It supports both high-quality rendering and low-latency use cases.
    </p>
    <p>Key Capabilities include:</p>
    <ul>
      <li><strong>High-fidelity photorealism</strong> with natural lighting, accurate materials, and rich color rendering</li>
      <li><strong>Flexible quality&ndash;latency tradeoffs</strong>, allowing faster generation at lower settings while still exceeding the visual quality of prior-generation image models</li>
      <li><strong>Robust facial and identity preservation</strong> for edits, character consistency, and multi-step workflows</li>
      <li><strong>Reliable text rendering</strong> with crisp lettering, consistent layout, and strong contrast inside images</li>
      <li><strong>Complex structured visuals</strong>, including infographics, diagrams, and multi-panel compositions</li>
      <li><strong>Precise style control and style transfer</strong> with minimal prompting, supporting everything from branded design systems to fine-art styles</li>
      <li><strong>Strong real-world knowledge and reasoning</strong>, enabling accurate depictions of objects, environments, and scenarios</li>
    </ul>
    <p>This guide highlights prompting patterns, best practices, and example prompts drawn from real production use cases.</p>

    {/* ──────────────── 2. Prompting Fundamentals ──────────────── */}
    <h2>2. Prompting Fundamentals</h2>
    <ul>
      <li><strong>Structure + goal:</strong> Write prompts in a consistent order (background/scene &rarr; subject &rarr; key details &rarr; constraints) and include the intended use (ad, UI mock, infographic) to set the &ldquo;mode&rdquo; and level of polish. For complex requests, use short labeled segments or line breaks instead of one long paragraph.</li>
      <li><strong>Specificity + quality cues:</strong> Be concrete about materials, shapes, textures, and the visual medium (photo, watercolor, 3D render), and add targeted &ldquo;quality levers&rdquo; only when needed (e.g., <em>film grain</em>, <em>textured brushstrokes</em>, <em>macro detail</em>). For photorealism, camera/composition terms (lens, aperture feel, lighting) often steer realism more reliably than generic &ldquo;8K/ultra-detailed.&rdquo;</li>
      <li><strong>Latency vs fidelity:</strong> For latency-sensitive or high-volume use cases, start with setting <code>quality=&quot;low&quot;</code> and evaluate whether it meets your visual requirements. In many cases, it provides sufficient fidelity with significantly faster generation.</li>
      <li><strong>Composition:</strong> Specify framing and viewpoint (close-up, wide, top-down), perspective/angle (eye-level, low-angle), and lighting/mood (soft diffuse, golden hour, high-contrast) to control the shot. If layout matters, call out placement (e.g., &ldquo;logo top-right,&rdquo; &ldquo;subject centered with negative space on left&rdquo;).</li>
      <li><strong>Constraints (what to change vs preserve):</strong> State exclusions and invariants explicitly (e.g., &ldquo;no watermark,&rdquo; &ldquo;no extra text,&rdquo; &ldquo;preserve identity/geometry/layout/brand elements&rdquo;). For edits, use &ldquo;change only X&rdquo; + &ldquo;keep everything else the same,&rdquo; and repeat the preserve list on each iteration to reduce drift.</li>
      <li><strong>Text in images:</strong> Put literal text in <strong>quotes</strong> or <strong>ALL CAPS</strong> and specify typography details (font style, size, color, placement) as constraints. For tricky words (brand names, uncommon spellings), spell them out letter-by-letter to improve character accuracy.</li>
      <li><strong>Multi-image inputs:</strong> Reference each input by <strong>index and description</strong> (&ldquo;Image 1: product photo&hellip; Image 2: style reference&hellip;&rdquo;) and describe how they interact. When compositing, be explicit about which elements move where.</li>
      <li><strong>Iterate instead of overloading:</strong> Start with a clean base prompt, then refine with small, single-change follow-ups. Use references like &ldquo;same style as before&rdquo; to leverage context, but re-specify critical details if they start to drift.</li>
    </ul>

    {/* ──────────────── 3. Setup ──────────────── */}
    <h2>3. Setup</h2>
    <p>Run this once. It creates the API client, creates <code>output_images/</code> in the images folder, and adds a small helper to save base64 images.</p>
    <p>Put any reference images used for edits into <code>input_images/</code> (or update the paths in the examples).</p>

    <GuideCodeBlock language="python">{`import os
import base64
from openai import OpenAI

client = OpenAI()

os.makedirs("../../images/input_images", exist_ok=True)
os.makedirs("../../images/output_images", exist_ok=True)

def save_image(result, filename: str) -> None:
    """
    Saves the first returned image to the given filename inside the output_images folder.
    """
    image_base64 = result.data[0].b64_json
    out_path = os.path.join("../../images/output_images", filename)
    with open(out_path, "wb") as f:
        f.write(base64.b64decode(image_base64))`}</GuideCodeBlock>

    {/* ──────────────── 4. Generate Use Cases ──────────────── */}
    <h2>4. Use Cases &mdash; Generate (text &rarr; image)</h2>

    {/* 4.1 Infographics */}
    <h3>4.1 Infographics</h3>
    <p>Use infographics to explain structured information for a specific audience: students, executives, customers, or the general public. Examples include explainers, posters, labeled diagrams, timelines, and &ldquo;visual wiki&rdquo; assets. For dense layouts or heavy in-image text, it&rsquo;s recommended to set output generation quality to <code>&quot;high&quot;</code>.</p>

    <GuideCodeBlock language="python">{`prompt = """
Create a detailed Infographic of the functioning and flow of an automatic coffee machine like a Jura. 
From bean basket, to grinding, to scale, water tank, boiler, etc. 
I'd like to understand technically and visually the flow.
"""

result = client.images.generate(
    model="gpt-image-1.5",
    prompt=prompt
)

save_image(result, "infographic_coffee_machine.png")`}</GuideCodeBlock>

    <GuideFrame caption="Generated infographic of an automatic coffee machine">
      <img className="w-full" src={infographicCoffee} alt="Infographic of automatic coffee machine flow" />
    </GuideFrame>

    {/* 4.2 Translation */}
    <h3>4.2 Translation in Images</h3>
    <p>Used for localizing existing designs (ads, UI screenshots, packaging, infographics) into another language without rebuilding the layout from scratch. The key is to preserve everything except the text &mdash; keep typography style, placement, spacing, and hierarchy consistent &mdash; while translating verbatim and accurately.</p>

    <GuideCodeBlock language="python">{`prompt = """
Translate the text in the infographic to Spanish. Do not change any other aspect of the image.
"""

result = client.images.edit(
    model="gpt-image-1.5",
    image=[
        open("../../images/output_images/infographic_coffee_machine.png", "rb"),
    ],
    prompt=prompt
)

save_image(result, "infographic_coffee_machine_sp.png")`}</GuideCodeBlock>

    <GuideColumns cols={2}>
      <GuideFrame caption="Original (English)">
        <img className="w-full" src={infographicCoffee} alt="Coffee machine infographic in English" />
      </GuideFrame>
      <GuideFrame caption="Translated (Spanish)">
        <img className="w-full" src={infographicCoffeeSp} alt="Coffee machine infographic translated to Spanish" />
      </GuideFrame>
    </GuideColumns>

    {/* 4.3 Photorealism */}
    <h3>4.3 Photorealistic Images that Feel &ldquo;Natural&rdquo;</h3>
    <p>To get believable photorealism, prompt the model as if a real photo is being captured in the moment. Use photography language (lens, lighting, framing) and explicitly ask for real texture (pores, wrinkles, fabric wear, imperfections). Avoid words that imply studio polish or staging. When detail matters, set <code>quality=&quot;high&quot;</code>.</p>

    <GuideCodeBlock language="python">{`prompt = """
Create a photorealistic candid photograph of an elderly sailor standing on a small fishing boat. 
He has weathered skin with visible wrinkles, pores, and sun texture, and a few faded traditional sailor tattoos on his arms. 
He is calmly adjusting a net while his dog sits nearby on the deck. Shot like a 35mm film photograph, medium close-up at eye level, using a 50mm lens. 
Soft coastal daylight, shallow depth of field, subtle film grain, natural color balance. 
The image should feel honest and unposed, with real skin texture, worn materials, and everyday detail. No glamorization, no heavy retouching. 
"""

result = client.images.generate(
    model="gpt-image-1.5",
    prompt=prompt,
    quality="high"
)

save_image(result, "photorealism.png")`}</GuideCodeBlock>

    <GuideFrame caption="Photorealistic candid photograph generated with quality='high'">
      <img className="w-full" src={photorealism} alt="Photorealistic elderly sailor on fishing boat" />
    </GuideFrame>

    {/* 4.4 World Knowledge */}
    <h3>4.4 World Knowledge</h3>
    <p>GPT-image-1.5 has built-in reasoning and strong world knowledge. For example, when asked to generate a scene set in Bethel, New York in August 1969, it can infer Woodstock and produce an accurate, context-appropriate image without being explicitly told about the event.</p>

    <GuideCodeBlock language="python">{`prompt = """
Create a realistic outdoor crowd scene in Bethel, New York on August 16, 1969.
Photorealistic, period-accurate clothing, staging, and environment.
"""

result = client.images.generate(
    model="gpt-image-1.5",
    prompt=prompt
)

save_image(result, "world_knowledge.png")`}</GuideCodeBlock>

    <GuideFrame caption="The model infers Woodstock from the date and location alone">
      <img className="w-full" src={worldKnowledge} alt="Realistic Woodstock crowd scene in Bethel, NY 1969" />
    </GuideFrame>

    {/* 4.5 Logo Generation */}
    <h3>4.5 Logo Generation</h3>
    <p>Strong logo generation comes from clear brand constraints and simplicity. Describe the brand&rsquo;s personality and use case, then ask for a clean, original mark with strong shape, balanced negative space, and scalability across sizes.</p>
    <p>You can specify parameter <code>n</code> to denote the number of variations you would like to generate.</p>

    <GuideCodeBlock language="python">{`prompt = """
Create an original, non-infringing logo for a company called Field & Flour, a local bakery. 
The logo should feel warm, simple, and timeless. Use clean, vector-like shapes, a strong silhouette, and balanced negative space. 
Favor simplicity over detail so it reads clearly at small and large sizes. Flat design, minimal strokes, no gradients unless essential. 
Plain background. Deliver a single centered logo with generous padding. No watermark.
"""

result = client.images.generate(
    model="gpt-image-1.5",
    prompt=prompt,
    n=4     # Generate 4 versions of the logo
)

# Save all 4 images to separate files
for i, item in enumerate(result.data, start=1):
    image_base64 = item.b64_json
    image_bytes = base64.b64decode(image_base64)
    with open(f"../../images/output_images/logo_generation_{i}.png", "wb") as f:
        f.write(image_bytes)`}</GuideCodeBlock>

    <GuideColumns cols={2}>
      <GuideFrame caption="Variation 1">
        <img className="w-full" src={logo1} alt="Field & Flour logo variation 1" />
      </GuideFrame>
      <GuideFrame caption="Variation 2">
        <img className="w-full" src={logo2} alt="Field & Flour logo variation 2" />
      </GuideFrame>
    </GuideColumns>
    <GuideColumns cols={2}>
      <GuideFrame caption="Variation 3">
        <img className="w-full" src={logo3} alt="Field & Flour logo variation 3" />
      </GuideFrame>
      <GuideFrame caption="Variation 4">
        <img className="w-full" src={logo4} alt="Field & Flour logo variation 4" />
      </GuideFrame>
    </GuideColumns>

    {/* 4.6 Comic Strip */}
    <h3>4.6 Story-to-Comic Strip</h3>
    <p>For story-to-comic generation, define the narrative as a sequence of clear visual beats, one per panel. Keep descriptions concrete and action-focused so the model can translate the story into readable, well-paced panels.</p>

    <GuideCodeBlock language="python">{`prompt = """
Create a short vertical comic-style reel with 4 equal-sized panels.
Panel 1: The owner leaves through the front door. The pet is framed in the window behind them, small against the glass, eyes wide, paws pressed high, the house suddenly quiet.
Panel 2: The door clicks shut. Silence breaks. The pet slowly turns toward the empty house, posture shifting, eyes sharp with possibility.
Panel 3: The house transformed. The pet sprawls across the couch like it owns the place, crumbs nearby, sunlight cutting across the room like a spotlight.
Panel 4: The door opens. The pet is seated perfectly by the entrance, alert and composed, as if nothing happened.
"""

result = client.images.generate(
    model="gpt-image-1.5",
    prompt=prompt
)

save_image(result, "comic_reel.png")`}</GuideCodeBlock>

    <GuideFrame caption="4-panel comic strip generated from a single prompt" maxWidth={480}>
      <img className="w-full" src={comicReel} alt="Comic strip of a pet's day while the owner is away" />
    </GuideFrame>

    {/* 4.7 UI Mockups */}
    <h3>4.7 UI Mockups</h3>
    <p>UI mockups work best when you describe the product as if it already exists. Focus on layout, hierarchy, spacing, and real interface elements, and avoid concept art language so the result looks like a usable, shipped interface rather than a design sketch.</p>

    <GuideCodeBlock language="python">{`prompt = """
Create a realistic mobile app UI mockup for a local farmers market. 
Show today's market with a simple header, a short list of vendors with small photos and categories, a small "Today's specials" section, and basic information for location and hours. 
Design it to be practical, and easy to use. White background, subtle natural accent colors, clear typography, and minimal decoration. 
It should look like a real, well-designed, beautiful app for a small local market. 
Place the UI mockup in an iPhone frame.
"""

result = client.images.generate(
    model="gpt-image-1.5",
    prompt=prompt
)

save_image(result, "ui_farmers_market.png")`}</GuideCodeBlock>

    <GuideFrame caption="Mobile app UI mockup in an iPhone frame" maxWidth={420}>
      <img className="w-full" src={uiFarmersMarket} alt="Farmers market mobile app UI mockup" />
    </GuideFrame>

    {/* ──────────────── 5. Edit Use Cases ──────────────── */}
    <h2>5. Use Cases &mdash; Edit (text + image &rarr; image)</h2>

    {/* 5.1 Style Transfer */}
    <h3>5.1 Style Transfer</h3>
    <p>Style transfer is useful when you want to keep the <em>visual language</em> of a reference image (palette, texture, brushwork, film grain, etc.) while changing the subject or scene. For best results, describe what must stay consistent (style cues) and what must change (new content), and add hard constraints like background, framing, and &ldquo;no extra elements&rdquo; to prevent drift.</p>

    <GuideCodeBlock language="python">{`prompt = """
Use the same style from the input image and generate a man riding a motorcycle on a white background.
"""

result = client.images.edit(
    model="gpt-image-1.5",
    image=[
        open("../../images/input_images/pixels.png", "rb"),
    ],
    prompt=prompt
)

save_image(result, "motorcycle.png")`}</GuideCodeBlock>

    <GuideColumns cols={2}>
      <GuideFrame caption="Input: style reference">
        <img className="w-full" src={pixelsInput} alt="Pixel art style reference" />
      </GuideFrame>
      <GuideFrame caption="Output: style transferred">
        <img className="w-full" src={motorcycle} alt="Man riding motorcycle in pixel art style" />
      </GuideFrame>
    </GuideColumns>

    {/* 5.2 Virtual Clothing Try-On */}
    <h3>5.2 Virtual Clothing Try-On</h3>
    <p>Virtual try-on is ideal for ecommerce previews where identity preservation is critical. The key is to explicitly lock the person (face, body shape, pose, hair, expression) and allow changes <em>only</em> to garments, then require realistic fit (draping, folds, occlusion) plus consistent lighting/shadows so the outfit looks naturally worn &mdash; not pasted on.</p>

    <GuideCodeBlock language="python">{`prompt = """
Edit the image to dress the woman using the provided clothing images. Do not change her face, facial features, skin tone, body shape, pose, or identity in any way. Preserve her exact likeness, expression, hairstyle, and proportions. Replace only the clothing, fitting the garments naturally to her existing pose and body geometry with realistic fabric behavior. Match lighting, shadows, and color temperature to the original photo so the outfit integrates photorealistically, without looking pasted on. Do not change the background, camera angle, framing, or image quality, and do not add accessories, text, logos, or watermarks.
"""

result = client.images.edit(
    model="gpt-image-1.5",
    image=[
        open("../../images/input_images/woman_in_museum.png", "rb"),
        open("../../images/input_images/tank_top.png", "rb"),
        open("../../images/input_images/jacket.png", "rb"),
        open("../../images/input_images/tank_top.png", "rb"),
        open("../../images/input_images/boots.png", "rb"),
    ],
    prompt=prompt
)

save_image(result, "outfit.png")`}</GuideCodeBlock>

    <GuideColumns cols={2}>
      <GuideFrame caption="Original photo">
        <img className="w-full" src={womanInMuseum} alt="Woman in museum" />
      </GuideFrame>
      <GuideFrame caption="Virtual try-on result">
        <img className="w-full" src={outfit} alt="Woman with new outfit applied" />
      </GuideFrame>
    </GuideColumns>
    <GuideColumns cols={3}>
      <GuideFrame caption="Tank top">
        <img className="w-full" src={tankTop} alt="Tank top reference" />
      </GuideFrame>
      <GuideFrame caption="Jacket">
        <img className="w-full" src={jacket} alt="Jacket reference" />
      </GuideFrame>
      <GuideFrame caption="Boots">
        <img className="w-full" src={boots} alt="Boots reference" />
      </GuideFrame>
    </GuideColumns>

    {/* 5.3 Drawing → Image */}
    <h3>5.3 Drawing &rarr; Image (Rendering)</h3>
    <p>Sketch-to-render workflows are great for turning rough drawings into photorealistic concepts while keeping the original intent. Treat the prompt like a spec: preserve layout and perspective, then <em>add realism</em> by specifying plausible materials, lighting, and environment. Include &ldquo;do not add new elements/text&rdquo; to avoid creative reinterpretations.</p>

    <GuideCodeBlock language="python">{`prompt = """
Turn this drawing into a photorealistic image.
Preserve the exact layout, proportions, and perspective.
Choose realistic materials and lighting consistent with the sketch intent.
Do not add new elements or text.
"""

result = client.images.edit(
    model="gpt-image-1.5",
    image=[
        open("../../images/input_images/drawings.png", "rb"),
    ],
    prompt=prompt
)

save_image(result, "realistic_valley.png")`}</GuideCodeBlock>

    <GuideColumns cols={2}>
      <GuideFrame caption="Input: rough drawing">
        <img className="w-full" src={drawingsInput} alt="Hand-drawn sketch" />
      </GuideFrame>
      <GuideFrame caption="Output: photorealistic render">
        <img className="w-full" src={realisticValley} alt="Photorealistic render from drawing" />
      </GuideFrame>
    </GuideColumns>

    {/* 5.4 Product Mockups */}
    <h3>5.4 Product Mockups (transparent background + label integrity)</h3>
    <p>Product extraction and mockup prep is commonly used for catalogs, marketplaces, and design systems. Success depends on edge quality (clean silhouette, no fringing/halos) and label integrity (text stays sharp and unchanged).</p>

    <GuideCodeBlock language="python">{`prompt = """
Extract the product from the input image.
Output: transparent background (RGBA PNG), crisp silhouette, no halos/fringing.
Preserve product geometry and label legibility exactly.
Optional: subtle, realistic contact shadow in the alpha (no hard cut line).
Do not restyle the product; only remove background and lightly polish.
"""

result = client.images.edit(
    model="gpt-image-1.5",
    image=[
        open("../../images/input_images/shampoo.png", "rb"),
    ],
    prompt=prompt
)

save_image(result, "extract_product.png")`}</GuideCodeBlock>

    <GuideColumns cols={2}>
      <GuideFrame caption="Input: product in scene">
        <img className="w-full" src={shampooInput} alt="Shampoo bottle in original scene" />
      </GuideFrame>
      <GuideFrame caption="Output: extracted product">
        <img className="w-full" src={extractProduct} alt="Shampoo bottle with transparent background" />
      </GuideFrame>
    </GuideColumns>

    {/* 5.5 Marketing Creatives */}
    <h3>5.5 Marketing Creatives with Real Text In-Image</h3>
    <p>Marketing creatives with real in-image text are great for rapid ad concepting, but typography needs explicit constraints. Put the exact copy in quotes, demand verbatim rendering (no extra characters), and describe placement and font style.</p>

    <GuideCodeBlock language="python">{`prompt = """
Create a realistic billboard mockup of the shampoo on a highway scene during sunset.
Billboard text (EXACT, verbatim, no extra characters):
"Fresh and clean"
Typography: bold sans-serif, high contrast, centered, clean kerning.
Ensure text appears once and is perfectly legible.
No watermarks, no logos.
"""

result = client.images.edit(
    model="gpt-image-1.5",
    image=[
        open("../../images/input_images/shampoo.png", "rb"),
    ],
    prompt=prompt
)

save_image(result, "billboard.png")`}</GuideCodeBlock>

    <GuideFrame caption="Billboard mockup with in-image text">
      <img className="w-full" src={billboard} alt="Highway billboard mockup featuring shampoo product" />
    </GuideFrame>

    {/* 5.6 Lighting and Weather */}
    <h3>5.6 Lighting and Weather Transformation</h3>
    <p>Used to re-stage a photo for different moods, seasons, or time-of-day variants (e.g., sunny &rarr; overcast, daytime &rarr; dusk, clear &rarr; snowy) while keeping the scene composition intact. The key is to change only environmental conditions while preserving identity, geometry, camera angle, and object placement.</p>

    <GuideCodeBlock language="python">{`prompt = """
Make it look like a winter evening with snowfall.
"""

result = client.images.edit(
    model="gpt-image-1.5",
    input_fidelity="high", 
    quality="high",
    image=[
        open("../../images/output_images/billboard.png", "rb"),
    ],
    prompt=prompt
)

save_image(result, "billboard_winter.png")`}</GuideCodeBlock>

    <GuideColumns cols={2}>
      <GuideFrame caption="Original billboard">
        <img className="w-full" src={billboard} alt="Billboard at sunset" />
      </GuideFrame>
      <GuideFrame caption="Winter evening with snowfall">
        <img className="w-full" src={billboardWinter} alt="Billboard transformed to winter scene" />
      </GuideFrame>
    </GuideColumns>

    {/* 5.7 Object Removal */}
    <h3>5.7 Object Removal</h3>
    <p>Object removal lets you surgically edit specific elements from a scene. The key is to be precise about what to remove and explicitly state that everything else must remain unchanged. Higher <code>input_fidelity</code> helps maintain likeness during edits.</p>

    <GuideCallout variant="tip">
      This example shows iterative editing &mdash; each prompt targets a single change, building on the previous result.
    </GuideCallout>

    <GuideCodeBlock language="python">{`# Step 1: Remove the red stripes from the sleeves
prompt = """
Remove the red stripes from the white t-shirt of the man. Do not change anything else.
"""

result = client.images.edit(
    model="gpt-image-1.5",
    input_fidelity="high", 
    quality="high",
    image=[
        open("../../images/output_images/man_with_flower.png", "rb"),
    ],
    prompt=prompt
)

save_image(result, "man_with_flower_no_stripes.png")

# Step 2: Change the hat color from red to light blue
prompt = """
Change the color of the red hat to light blue as velvet. Do not change anything else.
"""

result = client.images.edit(
    model="gpt-image-1.5",
    input_fidelity="high", 
    quality="high",
    image=[
        open("../../images/output_images/man_with_flower_no_stripes.png", "rb"),
    ],
    prompt=prompt
)

save_image(result, "man_with_blue_hat.png")`}</GuideCodeBlock>

    <GuideColumns cols={3}>
      <GuideFrame caption="Original Input">
        <img className="w-full" src={manWithFlower} alt="Original photo of man with red hat and red stripes" />
      </GuideFrame>
      <GuideFrame caption="Remove Red Stripes">
        <img className="w-full" src={manWithFlowerNoStripes} alt="Red stripes removed from sleeves" />
      </GuideFrame>
      <GuideFrame caption="Change Hat Color">
        <img className="w-full" src={manWithBlueHat} alt="Hat changed from red to blue" />
      </GuideFrame>
    </GuideColumns>

    {/* 5.8 Insert Person Into Scene */}
    <h3>5.8 Insert the Person Into a Scene</h3>
    <p>Person-in-scene compositing is useful for storyboards, campaigns, and &ldquo;what if&rdquo; scenarios where facial/identity preservation matters. Anchor realism by specifying a grounded photographic look (natural lighting, believable detail, no cinematic grading), and lock what must not change about the subject.</p>

    <GuideCodeBlock language="python">{`prompt = """
Generate a highly realistic action scene where this person is running away from a large, realistic brown bear attacking a campsite. The image should look like a real photograph someone could have taken, not an overly enhanced or cinematic movie-poster image.
She is centered in the image but looking away from the camera, wearing outdoorsy camping attire, with dirt on her face and tears in her clothing. She is clearly afraid but focused on escaping, running away from the bear as it destroys the campsite behind her.
The campsite is in Yosemite National Park, with believable natural details. The time of day is dusk, with natural lighting and realistic colors. Everything should feel grounded, authentic, and unstyled, as if captured in a real moment. Avoid cinematic lighting, dramatic color grading, or stylized composition.
"""

result = client.images.edit(
    model="gpt-image-1.5",
    input_fidelity="high", 
    quality="high",
    image=[
        open("../../images/input_images/woman_in_museum.png", "rb"),
    ],
    prompt=prompt
)

save_image(result, "scene.png")`}</GuideCodeBlock>

    <GuideColumns cols={2}>
      <GuideFrame caption="Input: reference person">
        <img className="w-full" src={womanInMuseum} alt="Woman in museum, used as identity reference" />
      </GuideFrame>
      <GuideFrame caption="Output: composited into scene">
        <img className="w-full" src={scene} alt="Woman composited into bear attack campsite scene" />
      </GuideFrame>
    </GuideColumns>

    {/* 5.9 Multi-Image Compositing */}
    <h3>5.9 Multi-Image Referencing and Compositing</h3>
    <p>Used to combine elements from multiple inputs into a single, believable image &mdash; great for &ldquo;insert this object/person into that scene&rdquo; workflows without re-generating everything. The key is to clearly specify what to transplant, where it should go, and what must remain unchanged, while matching lighting, perspective, scale, and shadows.</p>

    <GuideCodeBlock language="python">{`prompt = """
Place the dog from the second image into the setting of image 1, right next to the woman, use the same style of lighting, composition and background. Do not change anything else.
"""

result = client.images.edit(
    model="gpt-image-1.5",
    input_fidelity="high", 
    quality="high",
    image=[
        open("../../images/output_images/test_woman.png", "rb"),
        open("../../images/output_images/test_woman_2.png", "rb"),
    ],
    prompt=prompt
)

save_image(result, "test_woman_with_dog.png")`}</GuideCodeBlock>

    <GuideColumns cols={3}>
      <GuideFrame caption="Image 1: scene">
        <img className="w-full" src={testWoman} alt="Woman in scene" />
      </GuideFrame>
      <GuideFrame caption="Image 2: dog reference">
        <img className="w-full" src={testWoman2} alt="Dog reference image" />
      </GuideFrame>
      <GuideFrame caption="Output: composited">
        <img className="w-full" src={testWomanWithDog} alt="Woman with dog composited into scene" />
      </GuideFrame>
    </GuideColumns>

    {/* ──────────────── 6. Additional Use Cases ──────────────── */}
    <h2>6. Additional High-Value Use Cases</h2>

    {/* 6.1 Interior Design */}
    <h3>6.1 Interior Design &ldquo;Swap&rdquo; (precision edits)</h3>
    <p>Used for visualizing furniture or decor changes in real spaces without re-rendering the entire scene. The goal is surgical realism: swap a single object while preserving camera angle, lighting, shadows, and surrounding context so the edit looks like a real photograph, not a redesign.</p>

    <GuideCodeBlock language="python">{`prompt = """
In this room photo, replace ONLY white with chairs made of wood.
Preserve camera angle, room lighting, floor shadows, and surrounding objects.
Keep all other aspects of the image unchanged.
Photorealistic contact shadows and fabric texture.
"""

result = client.images.edit(
    model="gpt-image-1.5",
    image=[
        open("../../images/input_images/kitchen.jpeg", "rb"),
    ],
    prompt=prompt
)

save_image(result, "kitchen-chairs.png")`}</GuideCodeBlock>

    <GuideColumns cols={2}>
      <GuideFrame caption="Original kitchen">
        <img className="w-full" src={kitchenInput} alt="Kitchen with white chairs" />
      </GuideFrame>
      <GuideFrame caption="Chairs swapped to wood">
        <img className="w-full" src={kitchenChairs} alt="Kitchen with wooden chairs" />
      </GuideFrame>
    </GuideColumns>

    {/* 6.2 Holiday Card */}
    <h3>6.2 3D Pop-Up Holiday Card (product-style mock)</h3>
    <p>Ideal for seasonal marketing concepts and print previews. Emphasizes tactile realism &mdash; paper layers, fibers, folds, and soft studio lighting &mdash; so the result reads as a photographed physical product rather than a flat illustration.</p>

    <GuideCodeBlock language="python">{`scene_description = (
    "a cozy Christmas scene with an old teddy bear sitting inside a keepsake box, "
    "slightly worn fur, soft stitching repairs, placed near a window with falling snow outside. "
    "The scene suggests the child has grown up, but the memories remain."
)

short_copy = "Merry Christmas — some memories never fade."

prompt = f"""
Create a Christmas holiday card illustration.

Scene:
{scene_description}

Mood:
Warm, nostalgic, gentle, emotional.

Style:
Premium holiday card photography, soft cinematic lighting,
realistic textures, shallow depth of field,
tasteful bokeh lights, high print-quality composition.

Constraints:
- Original artwork only
- No trademarks
- No watermarks
- No logos

Include ONLY this card text (verbatim):
"{short_copy}"
"""

result = client.images.generate(
    model="gpt-image-1.5",
    prompt=prompt,
)

save_image(result, "christmas_holiday_card_teddy.png")`}</GuideCodeBlock>

    <GuideFrame caption="Generated holiday card with in-image text" maxWidth={520}>
      <img className="w-full" src={holidayCard} alt="Christmas holiday card with teddy bear" />
    </GuideFrame>

    {/* 6.3 Collectible Figure */}
    <h3>6.3 Collectible Action Figure / Plush Keychain (merch concept)</h3>
    <p>Used for early merch ideation and pitch visuals. Focuses on premium product photography cues (materials, packaging, print clarity) while keeping designs original and non-infringing.</p>

    <GuideCodeBlock language="python">{`# ---- Inputs ----
character_description = (
    "a vintage-style toy propeller airplane with rounded wings, "
    "a front-mounted spinning propeller, slightly worn paint edges, "
    "classic childhood proportions, designed as a nostalgic holiday collectible"
)

short_copy = "Christmas Memories Edition"

# ---- Prompt ----
prompt = f"""
Create a collectible action figure of {character_description}, in blister packaging.

Concept:
A nostalgic holiday collectible inspired by the simple toy airplanes
children used to play with during winter holidays.
Evokes warmth, imagination, and childhood wonder.

Style:
Premium toy photography, realistic plastic and painted metal textures,
studio lighting, shallow depth of field,
sharp label printing, high-end retail presentation.

Constraints:
- Original design only
- No trademarks
- No watermarks
- No logos

Include ONLY this packaging text (verbatim):
"{short_copy}"
"""

result = client.images.generate(
    model="gpt-image-1.5",
    prompt=prompt,
)

save_image(result, "christmas_collectible_toy_airplane.png")`}</GuideCodeBlock>

    <GuideFrame caption="Collectible toy in blister packaging" maxWidth={520}>
      <img className="w-full" src={collectibleAirplane} alt="Vintage toy airplane collectible in packaging" />
    </GuideFrame>

    {/* 6.4 Children's Book */}
    <h3>6.4 Children&rsquo;s Book Art with Character Consistency</h3>
    <p>Designed for multi-page illustration pipelines where character drift is unacceptable. A reusable &ldquo;character anchor&rdquo; ensures visual continuity across scenes, poses, and pages while allowing environmental and narrative variation.</p>

    <p><strong>Step 1: Character Anchor</strong> &mdash; establish the reusable main character</p>
    <p>Goal: Lock the character&rsquo;s appearance, proportions, outfit, and tone.</p>

    <GuideCodeBlock language="python">{`prompt = """
Create a children's book illustration introducing a main character.

Character:
A young, storybook-style hero inspired by a little forest outlaw,
wearing a simple green hooded tunic, soft brown boots, and a small belt pouch.
The character has a kind expression, gentle eyes, and a brave but warm demeanor.
Carries a small wooden bow used only for helping, never harming.

Theme:
The character protects and rescues small forest animals like squirrels, birds, and rabbits.

Style:
Children's book illustration, hand-painted watercolor look,
soft outlines, warm earthy colors, whimsical and friendly.
Proportions suitable for picture books (slightly oversized head, expressive face).

Constraints:
- Original character (no copyrighted characters)
- No text
- No watermarks
- Plain forest background to clearly showcase the character
"""

result = client.images.generate(
    model="gpt-image-1.5",
    prompt=prompt,
)

save_image(result, "childrens_book_illustration_1.png")`}</GuideCodeBlock>

    <GuideFrame caption="Step 1: Character anchor — establishing the main character">
      <img className="w-full" src={childrensBook1} alt="Children's book character anchor illustration" />
    </GuideFrame>

    <p><strong>Step 2: Story continuation</strong> &mdash; reuse character, advance the narrative</p>
    <p>Goal: Same character, new scene + action. Character appearance must remain unchanged.</p>

    <GuideCodeBlock language="python">{`prompt = """
Continue the children's book story using the same character.

Scene:
The same young forest hero is gently helping a frightened squirrel
out of a fallen tree after a winter storm.
The character kneels beside the squirrel, offering reassurance.

Character Consistency:
- Same green hooded tunic
- Same facial features, proportions, and color palette
- Same gentle, heroic personality

Style:
Children's book watercolor illustration,
soft lighting, snowy forest environment,
warm and comforting mood.

Constraints:
- Do not redesign the character
- No text
- No watermarks
"""

result = client.images.edit(
    model="gpt-image-1.5",
    image=[
        open("../../images/output_images/childrens_book_illustration_1.png", "rb"),
    ],
    prompt=prompt,
)

save_image(result, "childrens_book_illustration_2.png")`}</GuideCodeBlock>

    <GuideColumns cols={2}>
      <GuideFrame caption="Step 1: Character anchor">
        <img className="w-full" src={childrensBook1} alt="Character anchor illustration" />
      </GuideFrame>
      <GuideFrame caption="Step 2: Story continuation">
        <img className="w-full" src={childrensBook2} alt="Character in winter storm rescue scene" />
      </GuideFrame>
    </GuideColumns>

    {/* ──────────────── Conclusion ──────────────── */}
    <h2>Conclusion</h2>
    <p>This cookbook demonstrates how to use <code>gpt-image-1.5</code> to build high-quality, controllable image generation and editing workflows that hold up in real production settings. It emphasizes prompt structure, explicit constraints, and small iterative changes as the primary tools for controlling realism, layout, text accuracy, and identity preservation.</p>
    <p>We cover both generation and editing patterns &mdash; ranging from infographics, photorealism, UI mockups, and logos to translation, style transfer, virtual try-on, compositing, and lighting changes. Throughout the examples, the cookbook reinforces the importance of clearly separating what should change from what must remain invariant, and of restating those invariants on every iteration to prevent drift.</p>
    <p>We also highlight how <code>quality</code> and <code>input_fidelity</code> settings enable deliberate tradeoffs between latency and visual precision depending on the use case. Together, these examples form a practical, repeatable playbook for deploying <code>gpt-image-1.5</code> in production image workflows.</p>
  </article>
);

export default GptImageGuide;
