# EyeRise Website - Setup Guide

## Quick Start Commands

```bash
# Navigate to project directory
cd eyerise-web

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Run development server
npm run dev
# or
yarn dev
# or
pnpm dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3000`

## Important: Update Chrome Web Store URL

**Before deploying, update the Chrome Web Store link:**

1. Open `lib/constants.ts`
2. Find the line:
   ```typescript
   export const CHROME_STORE_URL = "https://chrome.google.com/webstore/detail/eyerise/PLACEHOLDER";
   ```
3. Replace `PLACEHOLDER` with your actual Chrome Web Store extension ID

This URL is automatically used in:
- All "Add to Chrome — Free" buttons
- Sticky CTA component (bottom-right on desktop, bottom on mobile)
- Navigation CTA button

## What's Included

✅ Complete home page with all sections (Hero, Pain, Solution, Proof, Pricing, Trust, Final CTA)
✅ Pricing page with monthly/yearly toggle
✅ Affiliate program page
✅ About page
✅ Support page with FAQ and troubleshooting
✅ Privacy policy page
✅ Terms of service page
✅ Responsive navigation with mobile menu
✅ Footer with all links
✅ SEO metadata configured
✅ Smooth animations with Framer Motion
✅ Sticky CTA button
✅ Premium design system (amber/slate palette)

## Design Features

- **Hero Section**: Animated laptop mockup with time-based tint shift (day → night)
- **Animations**: Scroll reveals, hover effects, stagger animations
- **Sticky CTA**: Always visible on scroll (desktop: bottom-right, mobile: bottom)
- **Responsive**: Mobile-first design, works on all screen sizes
- **Performance**: Optimized with Next.js Image, code splitting, font optimization

## Customization Points

### Update Pricing
Edit `lib/constants.ts` → `PRICING` object

### Update Features
Edit `lib/constants.ts` → `FEATURES` array

### Update SEO
Edit `lib/seo.ts` for metadata

### Update Colors
Edit `tailwind.config.ts` and `app/globals.css`

### Update Copy
Edit directly in page components (`app/*/page.tsx`)

## File Structure

All components are in `components/`
All pages are in `app/`
Constants and SEO config in `lib/`

## Next Steps

1. Install dependencies: `npm install`
2. Update Chrome Web Store URL in `lib/constants.ts`
3. Run dev server: `npm run dev`
4. Review and customize content as needed
5. Build for production: `npm run build`
6. Deploy to your hosting platform (Vercel recommended for Next.js)

## Notes

- All pages are fully functional and styled
- No external images required (uses CSS/HTML for visuals)
- All animations are lightweight and performant
- SEO metadata is configured for all pages
- Legal pages (Privacy, Terms) are placeholder content - update with your actual legal text
