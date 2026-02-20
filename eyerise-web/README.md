# EyeRise Marketing Website

A premium, production-ready marketing website for EyeRise Chrome extension. Built with Next.js, TypeScript, TailwindCSS, and Framer Motion.

## Features

- 🎨 Premium, minimalist design with Notion x Linear aesthetic
- ✨ Framer-like animations and smooth transitions
- 📱 Fully responsive and mobile-first
- 🚀 Optimized for performance and SEO
- ♿ Accessible and keyboard-friendly
- 🎯 High-converting with sticky CTAs

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion** (animations)
- **Inter** (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
eyerise-web/
├── app/
│   ├── page.tsx              # Home page
│   ├── pricing/page.tsx      # Pricing page
│   ├── affiliate/page.tsx    # Affiliate program
│   ├── about/page.tsx        # About page
│   ├── support/page.tsx      # Support & FAQ
│   ├── privacy/page.tsx      # Privacy policy
│   ├── terms/page.tsx        # Terms of service
│   ├── layout.tsx            # Root layout with Nav & Footer
│   └── globals.css           # Global styles
├── components/
│   ├── Button.tsx            # Reusable button component
│   ├── Card.tsx              # Card component with animations
│   ├── Section.tsx           # Section wrapper
│   ├── SectionHeader.tsx     # Section headers
│   ├── AnimatedReveal.tsx    # Scroll reveal animations
│   ├── StickyCTA.tsx         # Sticky CTA button
│   ├── LaptopHero.tsx        # Hero laptop mockup with animations
│   ├── PricingToggle.tsx     # Monthly/Yearly toggle
│   ├── ComparisonTable.tsx   # Feature comparison table
│   ├── Nav.tsx               # Navigation component
│   └── Footer.tsx            # Footer component
└── lib/
    ├── constants.ts          # Pricing, features, URLs
    └── seo.ts                # SEO metadata
```

## Configuration

### Chrome Web Store URL

To update the Chrome Web Store link, edit `lib/constants.ts`:

```typescript
export const CHROME_STORE_URL = "https://chrome.google.com/webstore/detail/eyerise/YOUR_EXTENSION_ID";
```

This URL is used in:
- All "Add to Chrome — Free" buttons
- Sticky CTA component
- Navigation CTA

### Pricing

Update pricing in `lib/constants.ts`:

```typescript
export const PRICING = {
  free: { ... },
  pro: {
    monthly: { price: "$4.99", ... },
    yearly: { price: "$39.99", ... }
  }
}
```

### SEO Metadata

Update SEO metadata in `lib/seo.ts` for each page. The root layout uses `defaultMetadata` from this file.

## Design System

### Colors

- **Amber**: Primary brand color (`#d97706`)
- **Slate**: Text and UI elements (`#334155`)
- **Stone-50**: Background (`#fafaf9`)

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large sizes (3xl-6xl)
- **Body**: Regular, comfortable reading sizes

### Animations

- Smooth scroll reveals on section entry
- Hover microinteractions on buttons and cards
- Parallax effect on hero laptop (desktop only)
- Time-based tint shift animation (12s cycle)
- Stagger animations for lists and grids

## Pages

### Home (`/`)

Complete landing page with:
- Hero section with laptop mockup
- Pain points section
- Features/solution section
- Comparison table
- Pricing cards
- Social proof
- Final CTA

### Pricing (`/pricing`)

- Monthly/Yearly toggle
- Free vs Pro comparison
- FAQ section

### Affiliate (`/affiliate`)

- Commission details (40% recurring)
- Example earnings calculator
- Application CTA
- FAQ

### About (`/about`)

- Mission statement
- Brand values
- Founder note

### Support (`/support`)

- Comprehensive FAQ
- Troubleshooting guide
- Contact form link

### Legal Pages

- `/privacy` - Privacy policy
- `/terms` - Terms of service

## Customization

### Styling

All styles use TailwindCSS. Customize in:
- `tailwind.config.ts` - Theme configuration
- `app/globals.css` - Global styles and CSS variables

### Content

- Copy: Edit directly in page components
- Features: Update `lib/constants.ts`
- Pricing: Update `lib/constants.ts`

## Performance

- Images: Use `next/image` for optimized images
- Fonts: Inter loaded via `next/font/google` with display swap
- Animations: Framer Motion with `viewport` optimization
- Code splitting: Automatic via Next.js App Router

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - EyeRise

## Support

For questions or issues, contact: support@eyerise.com
