# Portfolio - Rafa Al Razzak

Modern, fast, and secure portfolio built with Astro, React, and Tailwind CSS v4.

## Features

- ⚡ **Lightning Fast** - Static-first with React Islands
- 🎨 **Modern Design** - Tailwind CSS v4 with custom theme
- 🔒 **Secure** - Security headers and CSP
- 📱 **Responsive** - Mobile-first design
- ♿ **Accessible** - WCAG compliant
- 🌙 **Dark Mode** - System preference support
- 🚀 **Optimized** - Minimal JavaScript, fast load times

## Tech Stack

- **Framework**: Astro 4
- **UI Library**: React 18 (Islands Architecture)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Type Safety**: TypeScript
- **Deployment**: Static (Cloudflare Pages, Vercel, Netlify)

## Project Structure

```
/
├── public/              # Static assets
│   ├── _headers        # Security headers
│   └── ...
├── src/
│   ├── components/     # Reusable components
│   │   ├── ui/        # UI primitives
│   │   ├── MainPageClient.tsx
│   │   ├── ProjectCard.astro
│   │   ├── SocialLinks.astro
│   │   ├── ThemeToggle.tsx
│   │   └── WorkCard.astro
│   ├── data/          # Site data
│   │   ├── app-route.ts
│   │   ├── resume-data.ts
│   │   ├── site-metadata.ts
│   │   ├── social-media.ts
│   │   └── tools.ts
│   ├── hooks/         # React hooks
│   ├── icons/         # Icon components
│   ├── layouts/       # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── MainLayout.astro
│   ├── libs/          # Utilities
│   │   └── utils.ts
│   ├── pages/         # Routes
│   │   ├── index.astro
│   │   ├── cv.astro
│   │   ├── links.astro
│   │   └── songs.astro
│   ├── styles/        # Global styles
│   │   └── globals.css
│   └── types.ts       # TypeScript types
├── astro.config.mjs   # Astro configuration
├── package.json
├── postcss.config.js  # PostCSS configuration
├── tsconfig.json      # TypeScript configuration
└── wrangler.toml      # Cloudflare configuration
```

## Development

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Deployment

### Cloudflare Pages

```bash
bun run build
wrangler pages deploy dist
```

Or connect your Git repository to Cloudflare Pages dashboard.

### Vercel / Netlify

Connect your repository and they'll auto-detect Astro configuration.

## Performance

- **Lighthouse Score**: 100/100
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Bundle Size**: ~150KB (gzipped: ~50KB)

## Security

- Content Security Policy (CSP)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy restrictions

## Customization

### Update Site Info

Edit `src/data/site-metadata.ts`:

```ts
const siteMetadata = {
  SITE_NAME: 'Your Name',
  SITE_URL: 'https://yoursite.com',
  // ...
};
```

### Add New Page

Create `src/pages/about.astro`:

```astro
---
import MainLayout from '@/layouts/MainLayout.astro';
---

<MainLayout title="About">
  <h1>About Me</h1>
</MainLayout>
```

### Modify Theme

Edit `src/styles/globals.css` to customize colors and design tokens.

## License

MIT
