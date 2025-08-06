# 🎨 KEI.ai Content Generator

A modern web app for generating AI content using KEI.ai services including VEO 3, 4O Image, Midjourney, Flux, Runway, and Suno.

## ✨ Features

- 🎬 **VEO 3** - High-quality video generation
- 🖼️ **4O Image** - Advanced image creation
- 🎨 **Midjourney** - Artistic image generation
- ⚡ **Flux** - Fast image generation
- 🎥 **Runway** - Creative video tools
- 🎵 **Suno** - Music generation

## 🚀 Deploy to Vercel

### Quick Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/kei-ai-generator)

### Manual Deployment

1. **Clone this repository**
   ```bash
   git clone https://github.com/yourusername/kei-ai-generator.git
   cd kei-ai-generator
   ```

2. **Install Vercel CLI** (if not installed)
   ```bash
   npm i -g vercel
   ```

3. **Deploy to Vercel**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Choose your account
   - Link to existing project? **N**
   - Project name: `kei-ai-generator` (or your choice)
   - Directory: `./` (current directory)

5. **Your app will be live!**
   - Production URL: `https://your-project.vercel.app`
## 📁 Project Structure

```
├── index.html              # Main application
├── api/
│   └── kei-proxy.js        # Vercel serverless function for CORS
├── vercel.json             # Vercel configuration
├── package.json            # Node.js dependencies
└── README.md              # This file
```

## 🔧 Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run locally**
   ```bash
   vercel dev
   ```

3. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🔑 API Key Setup

1. Get your API key from [kie.ai/api-key](https://kie.ai/api-key)
2. Enter it in the app's API Key field
3. The key will be saved locally in your browser

## 🛠️ How It Works

- **Frontend**: Pure HTML/CSS/JavaScript
- **Backend**: Vercel serverless function (`/api/kei-proxy.js`)
- **CORS**: Handled by the proxy function
- **Storage**: Browser localStorage for history and API key

## 🌐 API Endpoints Used

- VEO 3: `https://api.kie.ai/api/v1/veo/`
- 4O Image: `https://api.kie.ai/api/v1/gpt4o-image/`
- Midjourney: `https://api.kie.ai/api/v1/midjourney/`
- Flux: `https://api.kie.ai/api/v1/flux/`
- Runway: `https://api.kie.ai/api/v1/runway/`
- Suno: `https://api.kie.ai/api/v1/suno/`

## 🔒 Privacy & Security

- API keys stored locally in browser only
- No data sent to our servers
- Direct communication with KEI.ai APIs
- HTTPS encryption for all requests

## 🐛 Troubleshooting

### CORS Errors
- Make sure you're using the deployed Vercel version
- Check that `/api/kei-proxy.js` is working at `your-url/api/kei-proxy`

### Generation Fails
- Verify your API key is correct
- Check KEI.ai account has sufficient credits
- Try a different service (VEO 3 vs 4O Image)

### Slow Generation
- Video generation (VEO 3, Runway) takes 30s-2min
- Image generation typically takes 10-30s
- Check browser console for detailed status

## 📞 Support

- KEI.ai API docs: [docs.kie.ai](https://docs.kie.ai)
- Get API key: [kie.ai/api-key](https://kie.ai/api-key)
- Vercel docs: [vercel.com/docs](https://vercel.com/docs)

## 📄 License

MIT License - feel free to modify and use for your projects!

---

Built with ❤️ using KEI.ai APIs and Vercel