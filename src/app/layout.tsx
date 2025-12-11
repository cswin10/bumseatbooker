import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
};

export const metadata: Metadata = {
  title: 'BumSeatBookers | Last-Minute Ticket Deals',
  description: 'The last-minute ticket marketplace that fills venues and gives spontaneous people cheap nights out. Empty seats are dead money. We fix that.',
  keywords: ['tickets', 'last minute deals', 'concert tickets', 'theatre tickets', 'comedy shows', 'live events', 'discount tickets'],
  authors: [{ name: 'BumSeatBookers' }],
  openGraph: {
    title: 'BumSeatBookers | Last-Minute Ticket Deals',
    description: 'Empty seats are dead money. We fix that.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'BumSeatBookers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BumSeatBookers | Last-Minute Ticket Deals',
    description: 'Empty seats are dead money. We fix that.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bum-black text-bum-cream antialiased">
        {/* Grain overlay */}
        <div className="grain-overlay" />

        {children}
      </body>
    </html>
  );
}
