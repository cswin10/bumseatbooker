# BumSeatBookers

**Last-minute tickets. First-class nights.**

The two-sided marketplace that fills empty venue seats with spontaneous people looking for cheap nights out.

![BumSeatBookers](https://img.shields.io/badge/Status-Demo-yellow)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## The Problem

- **15-20% of live event tickets go unsold** on average
- Empty seats = £0 revenue once the show starts
- Independent venues lack marketing budgets for last-minute sales
- Meanwhile, spontaneous people want cheap nights out but don't know what's available

## The Solution

BumSeatBookers connects promoters with unsold inventory to deal-seekers hungry for last-minute plans.

**For Promoters:**
- Connect your events
- Set automated release rules ("Drop prices 48hrs before at 50% off")
- Watch seats fill

**For Deal Seekers:**
- Sign up for alerts based on location and interests
- Get notified when deals drop
- Grab tickets, go out, have a great night

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/bumseatbooker.git
cd bumseatbooker

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

### Build for Production

```bash
# Build the static site
npm run build

# The output will be in the 'out' directory
```

## Project Structure

```
bumseatbooker/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles & Tailwind
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Main landing page
│   ├── components/
│   │   ├── Button.tsx       # Reusable button component
│   │   ├── DealCard.tsx     # Deal card component
│   │   ├── FAQ.tsx          # FAQ accordion section
│   │   ├── FinalCTA.tsx     # Final call-to-action section
│   │   ├── Footer.tsx       # Site footer
│   │   ├── Header.tsx       # Sticky navigation header
│   │   ├── Hero.tsx         # Hero section
│   │   ├── HowItWorks.tsx   # How it works section
│   │   ├── Input.tsx        # Reusable input component
│   │   ├── LiveDeals.tsx    # Live deals grid
│   │   ├── Pricing.tsx      # Pricing section
│   │   └── Stats.tsx        # Stats & testimonials
│   └── data/
│       ├── deals.ts         # Demo deal data
│       ├── faqs.ts          # FAQ content
│       └── testimonials.ts  # Testimonials & stats
├── public/
│   └── pitch-deck/
│       └── index.html       # Investor pitch deck
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

## Pitch Deck

The investor pitch deck is available at `/pitch-deck/index.html` or by running the dev server and navigating to [http://localhost:3000/pitch-deck/](http://localhost:3000/pitch-deck/).

Features:
- 12 slides covering problem, solution, market, business model, and roadmap
- Navigation dots for easy browsing
- Print/PDF export button
- Fully responsive design

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Cabinet Grotesk & General Sans (via Fontshare)

## Design System

### Colours

| Name | Hex | Usage |
|------|-----|-------|
| Black | `#0a0a0a` | Primary background |
| Yellow | `#FFE500` | Primary accent, CTAs |
| Coral | `#FF6B4A` | Secondary accent |
| Cream | `#FAF9F6` | Text, light backgrounds |
| Grey | `#1a1a1a` | Cards, secondary backgrounds |

### Typography

- **Display:** Cabinet Grotesk (Black, Bold)
- **Body:** General Sans (Regular, Medium)

## Demo Notes

This is a demonstration landing page. Key features:

- Forms show success states but don't submit data
- Deal data is fake but realistic
- All venues and testimonials are fictional
- Designed to look like a live product

## Made in Devon 🇬🇧

Built by [Dizzy Otter](https://dizzyotter.com) - Software studio specialising in rapid product development.

---

*Empty seats are dead money. We fix that.*
