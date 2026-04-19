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
  ColorSwatch,
  GuideCodeBlock,
  GuideImage,
} from '../../components/guide';

const IMG = 'https://res.cloudinary.com/dc8nheiuw/image/upload/guides/flux';

const FluxGuide = () => (
  <article className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-white/80 prose-strong:text-white prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-white/90 prose-code:before:content-none prose-code:after:content-none prose-pre:bg-white/10 prose-pre:text-white/90 prose-a:text-[#6dadeb] prose-blockquote:border-[#6dadeb] prose-blockquote:text-white/70 prose-hr:border-white/20 prose-li:text-white/80 prose-th:text-white/90 prose-td:text-white/70 prose-thead:border-white/20 prose-tr:border-white/10">
    <h1 className="gradient-knockout">FLUX.2 Prompting Guide</h1>
    <p><em>Master FLUX.2 [pro] &amp; [max] prompting for photorealism, typography, precise colors, and advanced techniques</em></p>

    <GuideCallout variant="info">
      <strong>No negative prompts:</strong> FLUX.2 does not support negative prompts. Focus on describing what you want, not what you don&rsquo;t want.
    </GuideCallout>

    {/* ──────────────── Prompt Structure ──────────────── */}
    <h2>Prompt Structure</h2>
    <p>Use this framework for consistent results: <strong>Subject + Action + Style + Context</strong></p>
    <ul>
      <li><strong>Subject</strong>: The main focus (person, object, character)</li>
      <li><strong>Action</strong>: What the subject is doing or their pose</li>
      <li><strong>Style</strong>: Artistic approach, medium, or aesthetic</li>
      <li><strong>Context</strong>: Setting, lighting, time, mood, or atmospheric conditions</li>
    </ul>

    <GuideTabs>
      <GuideTab title="Example 1">
        <GuideFrame>
          <GuideImage className="w-full" src={`${IMG}/black-cat-watermelon.png`} alt="Black cat behind watermelon slice" aspectRatio="59 / 33" />
        </GuideFrame>
        <GuidePrompt description="Black cat hiding behind a watermelon slice, professional studio shot, bright red and turquoise background with summer mystery vibe" />
      </GuideTab>

      <GuideTab title="Example 2">
        <GuideFrame>
          <GuideImage className="w-full" src={`${IMG}/dog-towel-bath.png`} alt="Dog wrapped in towel after bath" aspectRatio="59 / 33" />
        </GuideFrame>
        <GuidePrompt description="Dog wrapped in white towel after bath, photographed with direct flash and high exposure, fur wet details sharply visible, editorial raw portrait, cinematic harsh flash lighting, intimate humorous documentary style" />
      </GuideTab>

      <GuideTab title="Example 3">
        <GuideFrame>
          <GuideImage className="w-full" src={`${IMG}/red-propeller-plane-jungle.png`} alt="Red propeller plane in jungle" aspectRatio="59 / 33" />
        </GuideFrame>
        <GuidePrompt description="A small red propeller plane banking sharply between massive jungle trees in a bright anime style, with midday sun illuminating lush green foliage and waterfalls cascading in the background." />
      </GuideTab>

      <GuideTab title="Example 4">
        <GuideFrame>
          <GuideImage className="w-full" src={`${IMG}/businessman-beach-woodblock.png`} alt="Businessman at beach in woodblock print style" aspectRatio="59 / 33" />
        </GuideFrame>
        <GuidePrompt description="A businessman in a charcoal grey suit resting his arms on a bamboo railing at a secluded beach in the Philippines, cigarette glowing between his lips, illustrated in a vintage Japanese woodblock print style with soft pastel tones, calm turquoise waters, and a hazy afternoon sky." />
      </GuideTab>
    </GuideTabs>

    <p>Word order matters &mdash; FLUX.2 pays more attention to what comes first. Put your most important elements at the beginning:</p>
    <p><strong>Priority order</strong>: Main subject &rarr; Key action &rarr; Critical style &rarr; Essential context &rarr; Secondary details</p>
    <p><strong>Prompt length guidance</strong>:</p>
    <ul>
      <li><strong>Short (10&ndash;30 words)</strong>: Quick concepts and style exploration</li>
      <li><strong>Medium (30&ndash;80 words)</strong>: Usually ideal for most projects</li>
      <li><strong>Long (80+ words)</strong>: Complex scenes requiring detailed specifications</li>
    </ul>

    {/* ──────────────── Photorealistic Styles ──────────────── */}
    <h2>Photorealistic Styles</h2>
    <p>FLUX.2 generates photorealistic images from simple, natural language prompts. Reference specific eras, cameras, and techniques for distinctive looks.</p>

    <h3>Style Reference Guide</h3>
    <table>
      <thead>
        <tr><th>Style</th><th>Key Descriptors</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Modern Digital</strong></td><td>&ldquo;shot on Sony A7IV, clean sharp, high dynamic range&rdquo;</td></tr>
        <tr><td><strong>2000s Digicam</strong></td><td>&ldquo;early digital camera, slight noise, flash photography, candid, 2000s digicam style&rdquo;</td></tr>
        <tr><td><strong>80s Vintage</strong></td><td>&ldquo;film grain, warm color cast, soft focus, 80s vintage photo&rdquo;</td></tr>
        <tr><td><strong>Analog Film</strong></td><td>&ldquo;shot on Kodak Portra 400, natural grain, organic colors&rdquo;</td></tr>
      </tbody>
    </table>

    <GuideTabs>
      <GuideTab title="Modern Photorealism">
        <GuideFrame>
          <GuideImage className="w-full" src={`${IMG}/tiger-cub-rainy-jungle.png`} alt="Tiger cub under banana leaf in rainy jungle" aspectRatio="83 / 47" />
        </GuideFrame>
        <GuidePrompt description="Soaking wet tiger cub taking shelter under a banana leaf in the rainy jungle, close up photo" />
      </GuideTab>

      <GuideTab title="2000s Digicam">
        <GuideFrame>
          <GuideImage className="w-full" src={`${IMG}/sloth-bangkok-digicam.png`} alt="Sloth in Bangkok nightlife, digicam style" aspectRatio="83 / 47" />
        </GuideFrame>
        <GuidePrompt description="Sloth out drinking in Bangkok at night in a street full of party folks, 2000s digicam style, people in the background fading" />
      </GuideTab>

      <GuideTab title="80s Vintage">
        <GuideFrame>
          <GuideImage className="w-full" src={`${IMG}/baby-penguins-trampoline-80s.png`} alt="Baby penguins in trampoline park, 80s vintage" aspectRatio="83 / 47" />
        </GuideFrame>
        <GuidePrompt description="A group of baby penguins in a trampoline park, having the time of their lives, 80s vintage photo" />
      </GuideTab>

      <GuideTab title="Analog Photography">
        <GuideFrame>
          <GuideImage className="w-full" src={`${IMG}/old-family-portrait.png`} alt="Old faded family portrait" aspectRatio="83 / 47" />
        </GuideFrame>
        <GuidePrompt description="An old faded family portrait photograph from the early 1900s showing a family of five standing stiffly in front of their modest wooden farmhouse" />
      </GuideTab>
    </GuideTabs>

    <h3>Camera and Lens Simulation</h3>
    <p>Be specific about camera settings for authentic results:</p>
    <GuideCodeBlock language="text">{'Shot on Hasselblad X2D, 80mm lens, f/2.8, natural lighting'}</GuideCodeBlock>
    <GuideCodeBlock language="text">{'Canon 5D Mark IV, 24-70mm at 35mm, golden hour, shallow depth of field'}</GuideCodeBlock>

    <GuideCallout variant="tip">
      For photorealism, specify camera models, lenses, and film stocks. &ldquo;Shot on Fujifilm X-T5, 35mm f/1.4&rdquo; produces more authentic results than just &ldquo;professional photo.&rdquo;
    </GuideCallout>

    {/* ──────────────── Typography and Design ──────────────── */}
    <h2>Typography and Design</h2>
    <p>FLUX.2 generates clean typography, product marketing materials, and magazine layouts.</p>

    <GuideTabs>
      <GuideTab title="Product Advertisement">
        <GuideFrame>
          <GuideImage src={`${IMG}/phone-advertisement.png`} alt="Phone advertisement" style={{ maxWidth: 420, margin: '0 auto', display: 'block' }} aspectRatio="91 / 120" />
        </GuideFrame>
        <GuidePrompt description="Samsung Galaxy S25 Ultra product advertisement, 'Ultra-strong titanium' headline, 'Shielded in a strong titanium frame, your Galaxy S25 Ultra always stays protected' subtext, close-up of phone edge showing titanium frame, dark gradient background, clean minimalist tech aesthetic, professional product photography" />
      </GuideTab>

      <GuideTab title="Magazine Cover">
        <GuideFrame>
          <GuideImage src={`${IMG}/womens-health-cover.jpg`} alt="Women's Health magazine cover" style={{ maxWidth: 420, margin: '0 auto', display: 'block' }} aspectRatio="91 / 120" />
        </GuideFrame>
        <GuidePrompt description="Women's Health magazine cover, April 2025 issue, 'Spring forward' headline, woman in green outfit sitting on orange blocks, white sneakers, 'Covid: five years on' feature text, '15 skincare habits' callout, professional editorial photography, magazine layout with multiple text elements" />
      </GuideTab>

      <GuideTab title="White Paper Poster">
        <GuideFrame>
          <GuideImage src={`${IMG}/white-paper-avocado.png`} alt="White paper poster with avocado quote" style={{ maxWidth: 420, margin: '0 auto', display: 'block' }} aspectRatio="91 / 120" />
        </GuideFrame>
        <GuidePrompt description={'A White Paper with the Text "Crazy to think all this started with an Avocado." and a really bad drawing with diffusion artifacts of a avocado'} />
      </GuideTab>

      <GuideTab title="Groovy Retro Poster">
        <GuideFrame>
          <GuideImage src={`${IMG}/groovy-retro-poster.png`} alt="Groovy retro poster with sleep quote" style={{ maxWidth: 420, margin: '0 auto', display: 'block' }} aspectRatio="91 / 120" />
        </GuideFrame>
        <GuidePrompt description={'Groovy retro poster with the quote "If you love me let me sleep". Bold 70s typography in deep red and warm pink tones. Cream background and bold orange doodle around the text. Funky layout with playful shadow. Style: bold vintage aesthetic, dopamine decor'} />
      </GuideTab>
    </GuideTabs>

    <h3>Text Rendering Tips</h3>
    <p>FLUX.2 can generate readable text when you describe it clearly:</p>
    <ul>
      <li><strong>Use quotation marks</strong>: <em>&ldquo;The text &lsquo;OPEN&rsquo; appears in red neon letters above the door&rdquo;</em></li>
      <li><strong>Specify placement</strong>: Where text appears relative to other elements</li>
      <li><strong>Describe style</strong>: &ldquo;elegant serif typography&rdquo;, &ldquo;bold industrial lettering&rdquo;, &ldquo;handwritten script&rdquo;</li>
      <li><strong>Font size</strong>: &ldquo;large headline text&rdquo;, &ldquo;small body copy&rdquo;, &ldquo;medium subheading&rdquo;</li>
      <li><strong>Color</strong>: Use hex codes for brand text: <em>&ldquo;The logo text &lsquo;ACME&rsquo; in color #FF5733&rdquo;</em></li>
    </ul>

    <GuideTabs>
      <GuideTab title="Quotation marks">
        <GuideFrame>
          <GuideImage className="w-full" src={`${IMG}/open-neon-sign.png`} alt="'Open' neon sign" aspectRatio="59 / 33" />
        </GuideFrame>
        <GuidePrompt description="A Entry of a Sushi Restaurant, The text 'OPEN' appears in red neon letters above the door" />
      </GuideTab>

      <GuideTab title="Specify placement">
        <GuideColumns cols={2}>
          <GuideFrame caption="Before">
            <GuideImage className="w-full" src={`${IMG}/magazine-cover-before.jpg`} alt="Women's Health magazine cover" aspectRatio="487 / 365" />
          </GuideFrame>
          <GuideFrame caption="After">
            <GuideImage className="w-full" src={`${IMG}/magazine-cover-after-text.jpg`} alt="Women's Health magazine cover with added text" aspectRatio="90 / 67" />
          </GuideFrame>
        </GuideColumns>
        <GuidePrompt description={'Add the text "By Black Forest Labs" below the main text in the middle of the book'} />
      </GuideTab>

      <GuideTab title="Describe style">
        <GuideColumns cols={2}>
          <GuideFrame caption="Before">
            <GuideImage className="w-full" src={`${IMG}/womens-health-cover.jpg`} alt="Women's Health magazine cover" aspectRatio="91 / 120" />
          </GuideFrame>
          <GuideFrame caption="After">
            <GuideImage className="w-full" src={`${IMG}/magazine-cover-after-style.jpg`} alt="Women's Health magazine cover with added text" aspectRatio="34 / 45" />
          </GuideFrame>
        </GuideColumns>
        <GuidePrompt description={'Add the text "Black Forest Labs" in vibrant coral/orange, positioned center, ultra-bold decorative serif font, slight vintage poster feel.'} />
      </GuideTab>
    </GuideTabs>

    {/* ──────────────── HEX Color Code Prompting ──────────────── */}
    <h2>HEX Color Code Prompting</h2>
    <p>FLUX.2 supports precise color matching using hex codes. Useful for brand consistency and design work.</p>

    <h3>Basic Syntax</h3>
    <p>Signal hex colors with keywords like &ldquo;color&rdquo; or &ldquo;hex&rdquo; followed by the code:</p>

    <GuideTabs>
      <GuideTab title="Apple Illustration">
        <GuideFrame maxWidth={620}>
          <GuideImage className="w-full" src={`${IMG}/blue-apple-illustration.png`} alt="Blue apple illustration" aspectRatio="64 / 41" />
        </GuideFrame>
        <div className="my-2">
          <ColorSwatch color="#0047AB" label="Apple: #0047AB" />
        </div>
        <GuidePrompt description="a vintage illustration of an apple in color #0047AB with a heart-shaped cutout in the middle, on a white background" />
      </GuideTab>

      <GuideTab title="Livingroom">
        <GuideFrame maxWidth={620}>
          <GuideImage className="w-full" src={`${IMG}/livingroom-brand-colors.png`} alt="Brand color example" aspectRatio="64 / 41" />
        </GuideFrame>
        <div className="my-2">
          <ColorSwatch color="#C4725A" label="Walls: #C4725A" />
          <ColorSwatch color="#1B6B6F" label="Sofa: #1B6B6F" />
          <ColorSwatch color="#E8A847" label="Accent: #E8A847" />
        </div>
        <GuidePrompt description="A modern living room with warm terracotta walls in hex #C4725A, a large L-shaped sectional sofa in deep teal hex #1B6B6F, and golden amber hex #E8A847 accent pillows, throw blanket, and a velvet ottoman. Light oak hardwood floors, a round marble coffee table with dried pampas grass in a glass vase, floor-to-ceiling windows with sheer white curtains letting in soft afternoon light, two potted fiddle leaf figs, and an abstract painting on the main wall featuring all three accent colors. Clean minimal composition, natural daylight casting soft shadows across the room." />
      </GuideTab>

      <GuideTab title="Sunflower">
        <GuideFrame maxWidth={620}>
          <GuideImage className="w-full" src={`${IMG}/sunflower-hex-color.png`} alt="Sunflower with hex color prompting" aspectRatio="64 / 41" />
        </GuideFrame>
        <div className="my-2">
          <ColorSwatch color="#C92695" label="Sunflower: #C92695" />
        </div>
        <GuidePrompt description="sunflower in color #C92695" />
      </GuideTab>
    </GuideTabs>

    <h3>Gradient Colors</h3>
    <p>Apply gradients by specifying start and end colors:</p>

    <GuideTabs>
      <GuideTab title="Vase Gradient">
        <GuideFrame maxWidth={620}>
          <GuideImage className="w-full" src={`${IMG}/vase-gradient.png`} alt="Vase with gradient colors" aspectRatio="64 / 41" />
        </GuideFrame>
        <div className="my-2">
          <ColorSwatch color="#02eb3c" label="Gradient start: #02eb3c" />
          <ColorSwatch color="#edfa3c" label="Gradient end: #edfa3c" />
          <ColorSwatch color="#ff0088" label="Flowers: #ff0088" />
        </div>
        <GuidePrompt description="A vase on a table in living room, the color of the vase is a gradient, starting with color #02eb3c and finishing with color #edfa3c. The flowers inside the vase have the color #ff0088" />
      </GuideTab>

      <GuideTab title="Pillow Gradient">
        <GuideFrame maxWidth={620}>
          <GuideImage className="w-full" src={`${IMG}/pillow-radial-gradient.png`} alt="Round silk throw pillow with radial gradient" aspectRatio="64 / 41" />
        </GuideFrame>
        <div className="my-2">
          <ColorSwatch color="#6A0DAD" label="Center: #6A0DAD" />
          <ColorSwatch color="#FFD700" label="Edges: #FFD700" />
        </div>
        <GuidePrompt description="A round silk throw pillow resting on a light gray linen sofa, the fabric of the pillow shows a radial gradient from rich purple (#6A0DAD) at the center fading outward to warm gold (#FFD700) at the edges, even ambient indoor lighting, close-up perspective." />
      </GuideTab>

      <GuideTab title="Sky Gradient">
        <GuideFrame maxWidth={620}>
          <GuideImage className="w-full" src={`${IMG}/sky-gradient-panoramic.png`} alt="Panoramic sky with three horizontal gradient color zones" aspectRatio="64 / 41" />
        </GuideFrame>
        <div className="my-2">
          <ColorSwatch color="#1B0A3E" label="Upper sky: #1B0A3E" />
          <ColorSwatch color="#CF6A2E" label="Middle sky: #CF6A2E" />
          <ColorSwatch color="#E8728A" label="Horizon glow: #E8728A" />
        </div>
        <GuidePrompt description="A wide panoramic view of a vast open sky stretching above a flat horizon line hills. The sky fills the entire frame and displays three distinct horizontal color zones blending smoothly into each other. The upper portion of the sky is deep indigo (#1B0A3E), gradually transitioning through the middle into a warm burnt amber (#CF6A2E), and the lowest section near the horizon glows in soft rose pink (#E8728A)." />
      </GuideTab>
    </GuideTabs>

    <h3>Color in JSON Prompts</h3>
    <p>Combine hex colors with structured prompts for maximum control:</p>
    <GuideCodeBlock language="json">{`{
  "scene": "Makeup flat lay on marble surface",
  "subjects": [
    {
      "description": "eyeshadow palette",
      "colors": ["#E91E63", "#9C27B0", "#673AB7", "#3F51B5"]
    }
  ],
  "style": "beauty product photography",
  "lighting": "soft diffused overhead lighting"
}`}</GuideCodeBlock>

    <GuideFrame maxWidth={620}>
      <GuideImage className="w-full" src={`${IMG}/json-color-prompts-output.png`} alt="Color in JSON prompts example output" aspectRatio="64 / 41" />
    </GuideFrame>

    <div className="not-prose my-2">
      <ColorSwatch color="#E91E63" />
      <ColorSwatch color="#9C27B0" />
      <ColorSwatch color="#673AB7" />
      <ColorSwatch color="#3F51B5" />
    </div>

    <GuideCallout variant="warning">
      Hex codes work best when clearly associated with specific objects. Vague references like &ldquo;use #FF0000 somewhere&rdquo; may produce inconsistent results.
    </GuideCallout>

    {/* ──────────────── Infographics ──────────────── */}
    <h2>Infographics and Data Visualization</h2>
    <p>FLUX.2 can generate infographics with clean typography and structured layouts.</p>

    <h3>Infographic Template</h3>
    <GuideCodeBlock language="json">{`{
  "type": "infographic",
  "title": "Your Main Title",
  "subtitle": "Supporting context",
  "sections": [
    {
      "heading": "Section 1",
      "content": "Key information",
      "visual": "icon or chart type"
    }
  ],
  "color_scheme": ["#primary", "#secondary", "#accent"],
  "style": "modern, clean, corporate"
}`}</GuideCodeBlock>

    <p><strong>Example Prompt:</strong></p>
    <p><em>&ldquo;Create a vertical infographic about coffee consumption worldwide. Title: &lsquo;Global Coffee Culture&rsquo;. Include 3 sections with statistics, use icons for each country, color scheme #4A2C2A (brown) and #F5E6D3 (cream). Modern minimalist style with clean typography.&rdquo;</em></p>

    <GuideFrame caption="Data visualization with clean typography">
      <GuideImage className="w-full" src={`${IMG}/infographic-coffee.jpg`} alt="Infographic example" aspectRatio="1 / 1" />
    </GuideFrame>

    {/* ──────────────── Multi-Language ──────────────── */}
    <h2>Multi-Language Prompting</h2>
    <p>FLUX.2 understands multiple languages. Prompt in your native language for more culturally authentic results.</p>

    <GuideTabs>
      <GuideTab title="French">
        <GuideFrame maxWidth={620}>
          <GuideImage className="w-full" src={`${IMG}/french-normandy-market.png`} alt="French prompt: Normandy countryside food market at sunrise" aspectRatio="64 / 41" />
        </GuideFrame>
        <GuidePrompt description="Un marché alimentaire dans la campagne normande">
          <em>&ldquo;Un marché alimentaire dans la campagne normande, des marchands vendent divers légumes, fruits. Lever de soleil, temps un peu brumeux&rdquo;</em>
        </GuidePrompt>
      </GuideTab>

      <GuideTab title="Thai">
        <GuideFrame maxWidth={620}>
          <GuideImage className="w-full" src={`${IMG}/thai-bangkok-market.png`} alt="Thai prompt: Morning food market in rural Bangkok area" aspectRatio="64 / 41" />
        </GuideFrame>
        <GuidePrompt description="ตลาดอาหารเช้าในชนบทใกล้กรุงเทพฯ">
          <em>&ldquo;ตลาดอาหารเช้าในชนบทใกล้กรุงเทพฯ พ่อค้าแม่ค้ากำลังขายผักและผลไม้นานาชนิด บรรยากาศยามพระอาทิตย์ขึ้น มีหมอกจาง ๆ ปกคลุม สงบและอบอุ่น&rdquo;</em>
        </GuidePrompt>
      </GuideTab>

      <GuideTab title="Korean">
        <GuideFrame maxWidth={620}>
          <GuideImage className="w-full" src={`${IMG}/korean-seoul-rooftop.png`} alt="Korean prompt: Seoul rooftop garden at sunset" aspectRatio="64 / 41" />
        </GuideFrame>
        <GuidePrompt description="서울 도심의 옥상 정원, 저녁 노을이 지는 하늘">
          <em>&ldquo;서울 도심의 옥상 정원, 저녁 노을이 지는 하늘 아래에서 사람들이 작은 등불을 켜고 있다. 화려한 네온사인이 멀리 반짝이고, 정원에는 다양한 꽃들이 피어 있다. 분위기는 따뜻하고 낭만적이다&rdquo;</em>
        </GuidePrompt>
      </GuideTab>
    </GuideTabs>

    <GuideCallout variant="tip">
      Prompting in the native language of the content you&rsquo;re creating often produces more culturally authentic results &mdash; local markets, architecture, and atmosphere are rendered with greater accuracy.
    </GuideCallout>

    {/* ──────────────── Comic Strips ──────────────── */}
    <h2>Comic Strips and Sequential Art</h2>
    <p>Create consistent comic panels with character continuity. The key is to define your character in detail and maintain that description across panels.</p>

    <h3>The Diffusion Man Story</h3>
    <p>Generate each panel separately while keeping character descriptions consistent:</p>

    <div className="not-prose my-4 gap-4 grid grid-cols-1 sm:grid-cols-2">
      <GuideFrame caption="Panel 1: The Crisis">
        <GuideImage className="w-full" src={`${IMG}/comic-panel1-crisis.jpg`} alt="Worried scientist in server room" aspectRatio="45 / 26" />
      </GuideFrame>
      <GuideFrame caption="Panel 2: The Transformation">
        <GuideImage className="w-full" src={`${IMG}/comic-panel2-transformation.jpg`} alt="Diffusion Man transformation" aspectRatio="45 / 26" />
      </GuideFrame>
    </div>

    <div className="not-prose my-4 gap-4 grid grid-cols-1 sm:grid-cols-2">
      <GuideFrame caption="Panel 3: The Battle">
        <GuideImage className="w-full" src={`${IMG}/comic-panel3-battle.jpg`} alt="Diffusion Man fighting corrupted code" aspectRatio="45 / 26" />
      </GuideFrame>
      <GuideFrame caption="Panel 4: Victory">
        <GuideImage className="w-full" src={`${IMG}/comic-panel4-victory.jpg`} alt="Diffusion Man victorious" aspectRatio="45 / 26" />
      </GuideFrame>
    </div>

    <GuideAccordionGroup>
      <GuideAccordion title="Panel 1 Prompt: The Crisis">
        <p className="mt-2 italic">&ldquo;Style: Classic superhero comic Character: Worried scientist frantically typing on glowing holographic keyboard, face illuminated by blue light showing deep concern Setting: Massive computer server room with sparking circuits and red warning lights flashing on monitors Text: &lsquo;The AI models are corrupting! We need Diffusion Man!&rsquo; Mood: Tense, urgent + dramatic blue and red tones&rdquo;</p>
      </GuideAccordion>

      <GuideAccordion title="Panel 2 Prompt: The Transformation">
        <p className="mt-2 italic">&ldquo;Style: Classic superhero comic with dynamic action lines and electric energy effects Character: Diffusion Man/Mild-mannered programmer (30 years old, brown skin tone, short natural fade haircut with black hair, black-framed glasses, light blue button-up shirt, athletic build, strong jawline) body begins to glow with swirling gradients of deep purple, electric blue, and hot pink energy, mathematical equations and neural network patterns flowing around him in glowing lines Setting: Small office with computer monitors displaying code and error messages Text: &lsquo;When noise becomes signal, I am... DIFFUSION MAN!&rsquo; Mood: Powerful, transformative + dramatic backlighting and energy radiating outward in waves&rdquo;</p>
      </GuideAccordion>

      <GuideAccordion title="Panel 3 Prompt: The Battle">
        <p className="mt-2 italic">&ldquo;Style: Classic superhero comic with explosive action and dynamic composition Character: Diffusion Man (athletic 30-year-old with brown skin tone and short natural fade haircut with black hair, wearing sleek bodysuit with gradient patterns from deep purple to electric blue to hot pink, glowing neural network emblem on chest with interconnected nodes, short gradient cape, purple half-mask showing strong jawline and confident expression) extends both hands forward in powerful stance, shooting beams of structured noise and latent space energy at corrupted digital monsters made of glitching pixels and broken code Setting: Digital cyberspace environment with floating data cubes and cascading binary code Text: &lsquo;Time to DENOISE this chaos!&rsquo; Mood: Intense, action-packed + bright energy flashes and electric effects&rdquo;</p>
      </GuideAccordion>

      <GuideAccordion title="Panel 4 Prompt: Victory">
        <p className="mt-2 italic">&ldquo;Style: Classic superhero comic with warm, triumphant colors and clean composition Character: Diffusion Man (athletic 30-year-old with brown skin tone and short natural fade haircut with black hair, wearing sleek gradient bodysuit from deep purple to electric blue to hot pink, glowing neural network emblem on chest, short gradient cape flowing behind him, purple half-mask, strong jawline, confident heroic smile) stands heroically giving thumbs up gesture to grateful scientist beside him, her computer screens now showing stable green indicators and success messages Setting: Calm server room with soft blue ambient lighting and orderly data streams flowing smoothly in organized patterns Text: &lsquo;You saved us, Diffusion Man! The models are generating perfectly again!&rsquo; Mood: Victorious, hopeful + golden sunset-like tones streaming through windows&rdquo;</p>
      </GuideAccordion>
    </GuideAccordionGroup>

    <GuideCallout variant="tip">
      <strong>Character Consistency:</strong> Notice how Diffusion Man&rsquo;s description stays detailed and consistent across panels &mdash; brown skin tone, short natural fade haircut, gradient bodysuit from purple to blue to pink, neural network emblem, purple half-mask. Repeat these details in every panel prompt.
    </GuideCallout>

    {/* ──────────────── JSON Structured Prompting ──────────────── */}
    <h2>JSON Structured Prompting</h2>
    <p>For complex scenes and production workflows, FLUX.2 interprets structured JSON prompts, giving you precise control over every aspect of your image.</p>

    <p><strong>When to use JSON</strong>:</p>
    <ul>
      <li>Production workflows requiring consistent structure</li>
      <li>Automation and programmatic generation</li>
      <li>Complex scenes with multiple subjects and relationships</li>
      <li>When you need to iterate on specific elements independently</li>
    </ul>

    <p><strong>When natural language works better</strong>:</p>
    <ul>
      <li>Quick iterations and exploration</li>
      <li>Simple, single-subject scenes</li>
      <li>When prompt length isn&rsquo;t a concern</li>
      <li>Creative workflows where flexibility matters</li>
    </ul>

    <p>FLUX.2 understands both formats equally well &mdash; choose based on your workflow needs.</p>

    <h3>The Base Schema</h3>
    <GuideCodeBlock language="json">{`{
  "scene": "overall scene description",
  "subjects": [
    {
      "description": "detailed subject description",
      "position": "where in frame",
      "action": "what they're doing"
    }
  ],
  "style": "artistic style",
  "color_palette": ["#hex1", "#hex2", "#hex3"],
  "lighting": "lighting description",
  "mood": "emotional tone",
  "background": "background details",
  "composition": "framing and layout",
  "camera": {
    "angle": "camera angle",
    "lens": "lens type",
    "depth_of_field": "focus behavior"
  }
}`}</GuideCodeBlock>

    <h3>Precise Color Control Example</h3>
    <p>Break down products into components and assign exact hex colors to each part for brand consistency:</p>

    <GuideColumns cols={2}>
      <GuideFrame caption="Input reference">
        <GuideImage className="w-full" src={`${IMG}/adidas-sweatshirt-reference.jpg`} alt="Adidas sweatshirt reference" aspectRatio="841 / 838" />
      </GuideFrame>
      <GuideFrame caption="Generated output with exact color matching">
        <GuideImage className="w-full" src={`${IMG}/adidas-sweatshirt-generated.png`} alt="Adidas sweatshirt generated with precise colors" aspectRatio="1 / 1" />
      </GuideFrame>
    </GuideColumns>

    <GuideAccordionGroup>
      <GuideAccordion title="View JSON Prompt">
        <GuideCodeBlock language="json">{`{
  "scene": "A front-facing, studio product shot of an adidas sweatshirt, isolated on a clean white background",
  "subjects": [
    {
      "type": "Main Torso",
      "description": "The central chest and stomach panel of the sweatshirt, strictly in color #FFFFFF white",
      "position": "center body",
      "color_match": "exact"
    },
    {
      "type": "Shoulder Panels",
      "description": "The panels on the top of the shoulders (raglan style), strictly in color #000000 black",
      "position": "shoulders",
      "color_match": "exact"
    },
    {
      "type": "Sleeves",
      "description": "The long sleeves extending from the shoulder panels, strictly in color #86E04A lime green",
      "position": "arms",
      "color_match": "exact"
    },
    {
      "type": "Middle Sleeve Patch",
      "description": "Geometric rectangular patch on the middle sleeves, strictly in color #615E5E gray",
      "position": "middle sleeves",
      "color_match": "exact"
    },
    {
      "type": "Brand Logo",
      "description": "The Adidas Trefoil logo embroidered on the upper center chest, strictly in color #000000 black",
      "position": "upper chest center",
      "detail_preservation": "high"
    },
    {
      "type": "Trims and Stripes",
      "description": "The three-stripes on the sleeves, the ribbed neck collar, and the wrist cuffs, strictly in color #000000 black",
      "position": "trims",
      "color_match": "exact"
    },
    {
      "type": "Background",
      "description": "A flat, seamless white studio background, identical to the source",
      "position": "background",
      "color_match": "exact"
    }
  ],
  "color_palette": ["#FFFFFF", "#86E04A", "#615E5E", "#000000"]
}`}</GuideCodeBlock>
        <p className="mt-2">Each subject has a <code className="text-white/80 bg-white/10 px-1 py-0.5 rounded text-xs">type</code>, <code className="text-white/80 bg-white/10 px-1 py-0.5 rounded text-xs">description</code> with explicit color specification, <code className="text-white/80 bg-white/10 px-1 py-0.5 rounded text-xs">position</code>, and <code className="text-white/80 bg-white/10 px-1 py-0.5 rounded text-xs">color_match: &quot;exact&quot;</code> for precise control.</p>
      </GuideAccordion>
    </GuideAccordionGroup>

    <h3>Building a Prompt Step by Step</h3>
    <p>Let&rsquo;s build a product shot incrementally to see how each element contributes.</p>

    <p><strong>Step 1: Generating a coffee mug</strong></p>
    <GuideCodeBlock language="json">{`{
  "scene": "Professional studio product photography setup with polished concrete surface",
  "subjects": [
    {
      "description": "Minimalist ceramic coffee mug with steam rising from hot coffee inside",
      "pose": "Stationary on surface",
      "position": "Center foreground on polished concrete surface",
      "color_palette": ["matte black ceramic"]
    }
  ],
  "style": "Ultra-realistic product photography with commercial quality",
  "color_palette": ["matte black", "concrete gray", "soft white highlights"],
  "lighting": "Three-point softbox setup creating soft, diffused highlights with no harsh shadows",
  "mood": "Clean, professional, minimalist",
  "background": "Polished concrete surface with studio backdrop",
  "composition": "rule of thirds",
  "camera": {
    "angle": "high angle",
    "distance": "medium shot",
    "focus": "Sharp focus on steam rising from coffee and mug details",
    "lens-mm": 85,
    "f-number": "f/5.6",
    "ISO": 200
  }
}`}</GuideCodeBlock>
    <GuideFrame caption="Step 1: Single matte black mug with steam">
      <GuideImage className="w-full" src={`${IMG}/coffee-mug-step1.jpg`} alt="Professional product shot of a single black coffee mug with steam" aspectRatio="4 / 3" />
    </GuideFrame>

    <p><strong>Step 2: Adding a second mug in a different color</strong></p>
    <GuideCodeBlock language="json">{`{
  "scene": "Professional studio product photography setup with polished concrete surface",
  "subjects": [
    {
      "description": "Minimalist ceramic coffee mug with steam rising from hot coffee inside",
      "pose": "Stationary on surface",
      "position": "Center foreground on polished concrete surface",
      "color_palette": ["matte black ceramic"]
    },
    {
      "description": "Minimalist ceramic coffee mug, matching design to the black mug",
      "pose": "Stationary on surface",
      "position": "Right side of the black mug on polished concrete surface",
      "color_palette": ["matte yellow ceramic"]
    }
  ],
  "style": "Ultra-realistic product photography with commercial quality",
  "color_palette": ["matte black", "matte yellow", "concrete gray", "soft white highlights"],
  "lighting": "Three-point softbox setup creating soft, diffused highlights with no harsh shadows",
  "mood": "Clean, professional, minimalist",
  "background": "Polished concrete surface with studio backdrop",
  "composition": "rule of thirds",
  "camera": {
    "angle": "high angle",
    "distance": "medium shot",
    "focus": "Sharp focus on steam rising from coffee and both mugs in frame",
    "lens-mm": 85,
    "f-number": "f/5.6",
    "ISO": 200
  }
}`}</GuideCodeBlock>
    <GuideFrame caption="Step 2: Added a yellow mug to the composition">
      <GuideImage className="w-full" src={`${IMG}/coffee-mug-step2.jpg`} alt="Product shot with black and yellow coffee mugs" aspectRatio="4 / 3" />
    </GuideFrame>

    <p><strong>Step 3: Change the color of the steam</strong></p>
    <GuideCodeBlock language="json">{`{
  "scene": "Professional studio product photography setup with polished concrete surface",
  "subjects": [
    {
      "description": "Minimalist ceramic coffee mug with bright red steam rising from hot coffee inside",
      "pose": "Stationary on surface",
      "position": "Center foreground on polished concrete surface",
      "color_palette": ["matte black ceramic", "bright red steam"]
    },
    {
      "description": "Minimalist ceramic coffee mug, matching design to the black mug",
      "pose": "Stationary on surface",
      "position": "Right side of the black mug on polished concrete surface",
      "color_palette": ["matte yellow ceramic"]
    }
  ],
  "style": "Ultra-realistic product photography with commercial quality",
  "color_palette": ["matte black", "matte yellow", "bright red", "concrete gray", "soft white highlights"],
  "lighting": "Three-point softbox setup creating soft, diffused highlights with no harsh shadows",
  "mood": "Clean, professional, minimalist",
  "background": "Polished concrete surface with studio backdrop",
  "composition": "rule of thirds",
  "camera": {
    "angle": "high angle",
    "distance": "medium shot",
    "focus": "Sharp focus on steam rising from coffee and both mugs in frame",
    "lens-mm": 85,
    "f-number": "f/5.6",
    "ISO": 200
  }
}`}</GuideCodeBlock>
    <GuideFrame caption="Step 3: Changed the steam color to bright red">
      <GuideImage className="w-full" src={`${IMG}/coffee-mug-step3.jpg`} alt="Product shot with black and yellow mugs, red steam rising from the black mug" aspectRatio="4 / 3" />
    </GuideFrame>

    <GuideCallout variant="tip">
      You can include the JSON directly in your prompt, or flatten it into natural language. FLUX.2 understands both formats.
    </GuideCallout>

    {/* ──────────────── Multi-Reference Image Editing ──────────────── */}
    <h2>Multi-Reference Image Editing</h2>

    <GuideCallout variant="note">
      [pro] API has a 9MP total limit for input+output. At 1MP output you can use up to 8 reference images, at 2MP output up to 7, and so on.
    </GuideCallout>

    <p>Multi-reference works well for:</p>
    <ul>
      <li><strong>Fashion shoots</strong>: Combine clothing items into styled outfits</li>
      <li><strong>Interior design</strong>: Place furniture and decor in rooms</li>
      <li><strong>Product composites</strong>: Combine multiple products in scenes</li>
      <li><strong>Character consistency</strong>: Maintain identity across variations</li>
    </ul>

    <h3>Fashion Editorial Example (8 references)</h3>
    <p><strong>Prompt:</strong> <em>&ldquo;A spiritual architectural photograph captured on expired Kodak Ektachrome 64 slide film cross-processed from 1987 with a 35mm spherical lens at f/5.6, featuring model standing before small forest chapel in clearing. The model wears the outfit, positioned on stone steps leading to wooden chapel, red creating stark contrast against weathered brown timber. Background shows traditional Schwarzwald chapel &mdash; dark wood construction with small bell tower, carved wooden door, religious paintings under eaves, surrounding clearing with wild flowers, tall firs creating natural cathedral, small cemetery with wooden crosses. Dappled forest light at 1/125. Cross-processed Ektachrome showing extreme color shifts &mdash; cyan-magenta split, warm wood tones pushed to orange-brown, oversaturated red, crushed black shadows, blown highlights, heavy grain creating mysterious atmosphere. Composition emphasizes sacred spaces and pilgrimage. Thomas Struth church interiors, Candida Höfer architectural documentation, religious tourism meets fashion editorial, spiritual Schwarzwald mysticism.&rdquo;</em></p>

    <GuideFrame caption="8 input references (clothing, accessories, style elements) → combined output">
      <GuideImage className="w-full" src={`${IMG}/multi-reference-fashion.jpg`} alt="Eight input reference images with generated output" aspectRatio="4861 / 1863" />
    </GuideFrame>

    <GuideCallout variant="tip">
      For multi-reference editing, describe how each input should be used. The model combines clothing items, accessories, and style references into a cohesive scene based on your prompt.
    </GuideCallout>

    {/* ──────────────── Prompt Upsampling ──────────────── */}
    <h2>Prompt Upsampling</h2>
    <p>FLUX.2 includes a <code>prompt_upsampling</code> parameter that automatically enhances your prompt. Use it for:</p>
    <ul>
      <li>Quick iterations without crafting detailed prompts</li>
      <li>Exploring creative variations</li>
      <li>When you have a basic concept but want richer output</li>
    </ul>

    <GuideCallout variant="note">
      Prompt upsampling adds detail and context to your prompt automatically. Your original intent is preserved while the model expands on visual elements.
    </GuideCallout>

    {/* ──────────────── Aspect Ratios ──────────────── */}
    <h2>Aspect Ratios and Resolution</h2>

    <GuideCallout variant="note">
      <strong>Note: Art/official currently generates all images in a 1:1 square format. Any aspect-ratio requests in your prompt will not be considered.</strong>
    </GuideCallout>

    <p>Choose aspect ratios based on your use case:</p>

    <table>
      <thead>
        <tr><th>Aspect Ratio</th><th>Use Case</th><th>Example Dimensions</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>1:1</strong> (Square)</td><td>Social media, product shots</td><td>1024&times;1024, 1536&times;1536</td></tr>
        <tr><td><strong>16:9</strong> (Widescreen)</td><td>Landscapes, cinematic shots</td><td>1920&times;1080, 1536&times;864</td></tr>
        <tr><td><strong>9:16</strong> (Portrait)</td><td>Mobile content, portraits</td><td>1080&times;1920, 864&times;1536</td></tr>
        <tr><td><strong>4:3</strong> (Classic)</td><td>Magazine layouts, presentations</td><td>1536&times;1152, 1024&times;768</td></tr>
        <tr><td><strong>21:9</strong> (Ultrawide)</td><td>Panoramas, wide scenes</td><td>2048&times;864</td></tr>
      </tbody>
    </table>

    <p><strong>Resolution limits</strong>: Minimum 64&times;64, maximum 4MP (e.g., 2048&times;2048). Output dimensions must be multiples of 16. Recommended up to 2MP for most use cases.</p>

    {/* ──────────────── Best Practices ──────────────── */}
    <h2>Best Practices Summary</h2>

    <GuideAccordionGroup>
      <GuideAccordion title="Structure for Control">
        <p className="mt-2">Use JSON structured prompts when you need precise control over multiple elements. Start simple and add complexity as needed.</p>
      </GuideAccordion>
      <GuideAccordion title="Be Specific with Colors">
        <p className="mt-2">Always associate hex codes with specific objects. &ldquo;The car is #FF0000&rdquo; works better than &ldquo;use red #FF0000 in the image.&rdquo;</p>
      </GuideAccordion>
      <GuideAccordion title="Describe What You Want">
        <p className="mt-2">FLUX.2 has no negative prompts. Instead of &ldquo;no blur,&rdquo; say &ldquo;sharp focus throughout.&rdquo; Instead of &ldquo;no people,&rdquo; describe an &ldquo;empty scene.&rdquo;</p>
      </GuideAccordion>
      <GuideAccordion title="Reference Camera and Style">
        <p className="mt-2">For photorealism, specify camera models, lenses, and film stocks. &ldquo;Shot on Fujifilm X-T5, 35mm f/1.4&rdquo; produces more authentic results than &ldquo;professional photo.&rdquo;</p>
      </GuideAccordion>
      <GuideAccordion title="Use Native Languages">
        <p className="mt-2">Prompt in the language that best describes your desired cultural context. French for Parisian scenes, Japanese for anime styles.</p>
      </GuideAccordion>
      <GuideAccordion title="Layer Multi-Reference Carefully">
        <p className="mt-2">When using multiple input images, clearly describe the role of each: subject from image 1, style from image 2, background from image 3.</p>
      </GuideAccordion>
    </GuideAccordionGroup>

    {/* ──────────────── Quick Reference ──────────────── */}
    <h2>Quick Reference</h2>

    <table>
      <thead>
        <tr><th>Technique</th><th>When to Use</th><th>Key Syntax</th></tr>
      </thead>
      <tbody>
        <tr><td>JSON Prompts</td><td>Complex scenes, automation</td><td><code>{`{"scene": "...", "style": "..."}`}</code></td></tr>
        <tr><td>Hex Colors</td><td>Brand work, precise matching</td><td><code>color #FF5733</code> or <code>hex #FF5733</code></td></tr>
        <tr><td>Camera References</td><td>Photorealism</td><td><code>shot on [camera], [lens], [settings]</code></td></tr>
        <tr><td>Style Eras</td><td>Period-specific looks</td><td><code>80s vintage</code>, <code>2000s digicam</code></td></tr>
        <tr><td>Multi-Reference</td><td>Composite images</td><td>[pro]: 8, [flex]: 10, [dev]: ~6</td></tr>
        <tr><td>Seed</td><td>Reproducible results</td><td><code>seed: 42</code></td></tr>
        <tr><td>Guidance [flex]</td><td>Prompt adherence</td><td><code>guidance: 4.5</code> (1.5&ndash;10)</td></tr>
        <tr><td>Steps [flex]</td><td>Quality vs speed</td><td><code>steps: 50</code> (max 50)</td></tr>
        <tr><td>Aspect Ratios</td><td>Use case optimization</td><td>1:1, 16:9, 9:16, 4:3, 21:9</td></tr>
      </tbody>
    </table>
  </article>
);

export default FluxGuide;
