# WCCSight — Winter Cover Crop Monitoring

Research website for the WCCSight project, presented at the Roepke Scholar Colloquium, UIUC, April 2026.

**Zhiyu Guo** — Geography B.S. / Sociology B.A., UIUC 2025  
Advised by Dr. Chunyuan Diao · RS Space-Time Innovation Lab  
2025–2026 Howard & Ruth Roepke Undergraduate Research Scholar

---

## Project overview

WCCSight is a pipeline for large-scale winter cover crop (WCC) monitoring in the U.S. Midwest, combining:
- **Google Street View** imagery as low-cost ground truth
- **Sentinel-2 NDVI** time-series for satellite cross-validation
- **Vision-language models** (Gemini, GPT-4o) for zero-shot cover crop classification

---

## Repo structure

```
wccsight/
├── public/
│   ├── index.html          ← main website
│   ├── style.css           ← stylesheet
│   ├── main.js             ← interactivity (tabs, scroll, animations)
│   └── images/             ← all figure images (JPG, web-optimized)
├── vercel.json             ← Vercel deployment config
└── README.md
```

---

## Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
# Install Vercel CLI if needed
npm i -g vercel

# Deploy from the repo root
vercel --prod
```

When prompted:
- **Root directory**: `public`
- **Framework preset**: Other
- **Build command**: *(leave blank)*
- **Output directory**: `public`

### Option B — Vercel Dashboard (no CLI)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Set **Root Directory** to `public`
5. Leave Build Command and Output Directory blank
6. Click **Deploy**

---

## Adding your own images

Drop images into `public/images/` and reference them in `index.html` as:

```html
<img src="images/your-image.jpg" alt="descriptive alt text" class="img-border img-wide" />
```

Recommended: resize images to ≤1400px wide and compress to JPEG (quality 85) before adding.

---

## Local preview

No build step needed — just open `public/index.html` in your browser, or run:

```bash
cd public
python3 -m http.server 8080
# then visit http://localhost:8080
```

---

## Credits

- USDA NASS Crop Progress Report data
- Google Street View Static API imagery
- Sentinel-2 NDVI via Google Earth Engine
- USDA Crop Sequence Boundaries (Chen, 2025)
- VLM evaluation: Google Gemini, OpenAI GPT-4o
