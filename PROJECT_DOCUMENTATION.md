# SA-Errandlogistics Marketplace

## Project Overview

A modern, premium marketplace platform connecting buyers and sellers across Nigeria, Ghana, and Benin Republic. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Design Philosophy

- **Light & Clean UI**: Premium, modern, and minimalist design (not dark mode)
- **Brand Colors**: Primary green (#3DFF7F) with clean white backgrounds
- **Smooth Animations**: Framer Motion for elegant transitions
- **Responsive**: Mobile-first, fully responsive design
- **Accessible**: WCAG compliant with semantic HTML

## Key Features

### For Buyers
- Browse products across 3 countries
- Real-time chat with sellers
- Flexible delivery options (seller or SA-Errandlogistics)
- Secure payments with buyer protection
- Multi-currency support (NGN, GHS, XOF)

### For Sellers
- Easy product listing
- Order management dashboard
- Direct messaging with buyers
- Analytics and reporting
- Cross-border selling

## Tech Stack

- **Framework**: Next.js 16.2.6 (App Router)
- **React**: 19.2.4
- **TypeScript**: ^5
- **Styling**: Tailwind CSS 4
- **UI Components**: Ant Design 6.3.7
- **Animations**: 
  - Framer Motion 12.38.0
  - GSAP 3.15.0
- **Icons**: Lucide React

## Project Structure

```
sa-logistics/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   ├── shop/              # Shop/catalog page
│   │   ├── sell/              # Seller registration/info
│   │   ├── about/             # About us
│   │   ├── contact/           # Contact form
│   │   └── how-it-works/      # How it works guide
│   ├── components/            # Reusable components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Hero.tsx           # Hero section
│   │   ├── HowItWorks.tsx     # Steps component
│   │   ├── FeaturedCategories.tsx
│   │   ├── PopularProducts.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTASection.tsx
│   │   └── Footer.tsx
│   └── lib/                   # Utilities
│       ├── constants.ts       # App constants
│       └── utils.ts           # Helper functions
├── public/
│   └── assets/
│       └── logo.png           # SA-Errandlogistics logo
└── [config files]

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
npm start
```

## Pages

### Homepage (`/`)
- Hero section with CTAs
- How it works (4 steps)
- Featured categories
- Popular products
- Why choose us
- Testimonials
- CTA section

### Shop (`/shop`)
- Product catalog with filters
- Search functionality
- Category filtering
- Location filtering
- Price range filtering

### Sell (`/sell`)
- Seller benefits
- Registration CTA
- Dashboard preview
- Getting started guide

### About (`/about`)
- Company story
- Mission & values
- Team information

### Contact (`/contact`)
- Contact form
- Office locations
- Business hours
- Social media links

### How It Works (`/how-it-works`)
- Buyer journey (4 steps)
- Seller journey (4 steps)
- Key features
- FAQ sections

## Color Palette

```css
/* Primary Brand Colors */
--brand-green: #3DFF7F;
--brand-light: #F8FAFB;
--brand-dark: #1A1D21;

/* Tailwind Extended Colors */
primary-50: #e6fff5
primary-100: #b3ffe0
primary-200: #80ffcc
primary-300: #4dffb8
primary-400: #1affa3
primary-500: #00e68a (main)
primary-600: #00b36b
primary-700: #00804d
primary-800: #004d2e
primary-900: #001a0f
```

## Typography

- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, large sizes (text-4xl to text-7xl)
- **Body**: Regular weight, readable (text-base to text-xl)
- **Small Text**: text-sm to text-xs for metadata

## Components

### Reusable Classes

```css
.container-custom - Max-width container with padding
.btn-primary - Primary green button
.btn-secondary - Secondary outlined button
.section-padding - Consistent section spacing (py-16 md:py-24)
.card-shadow - Card hover shadow effect
```

## Images

All images use URLs from Unsplash for demo purposes. Replace with actual product/brand images in production.

## Multi-Country Support

The platform supports:
- 🇳🇬 Nigeria (NGN - ₦)
- 🇬🇭 Ghana (GHS - GH₵)
- 🇧🇯 Benin (XOF - CFA)

## Future Enhancements

- [ ] User authentication system
- [ ] Product detail pages
- [ ] Shopping cart functionality
- [ ] Payment integration
- [ ] Real-time chat system
- [ ] Seller dashboard
- [ ] Order management
- [ ] Review and rating system
- [ ] Advanced search and filters
- [ ] Mobile app (React Native)

## Contributing

This is a proprietary project. Please contact the team before making contributions.

## License

Private - All rights reserved © 2026 SA-Errandlogistics
