'use client';

import { motion } from 'framer-motion';
import { Ticket, Twitter, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

const footerLinks = {
  product: [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Live Deals', href: '#deals' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press Kit', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-bum-black border-t border-white/5">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Ticket className="w-8 h-8 text-bum-yellow transform -rotate-12" />
              <span className="font-display text-2xl font-black tracking-tight">
                <span className="text-bum-yellow">Bum</span>
                <span className="text-bum-cream">Seat</span>
                <span className="text-bum-coral">Bookers</span>
              </span>
            </a>
            <p className="text-bum-cream/50 mb-6 max-w-sm">
              The last-minute ticket marketplace that fills venues and gives
              spontaneous people cheap nights out.
            </p>
            <div className="flex items-center gap-2 text-bum-cream/40 text-sm mb-4">
              <MapPin className="w-4 h-4" />
              <span>Made in Devon, UK</span>
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center bg-bum-grey/50 text-bum-cream/50 hover:bg-bum-yellow hover:text-bum-black transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="font-display font-bold text-bum-cream mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-bum-cream/50 hover:text-bum-yellow transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-bum-cream mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-bum-cream/50 hover:text-bum-yellow transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-bum-cream mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-bum-cream/50 hover:text-bum-yellow transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-bum-cream/30 text-sm">
            &copy; {new Date().getFullYear()} BumSeatBookers. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-bum-cream/30 text-sm">
            <span>Built by</span>
            <a
              href="#"
              className="text-bum-yellow hover:underline font-medium"
            >
              Dizzy Otter
            </a>
          </div>
          <a
            href="mailto:hello@bumseatbookers.com"
            className="flex items-center gap-2 text-bum-cream/50 hover:text-bum-yellow transition-colors text-sm"
          >
            <Mail className="w-4 h-4" />
            hello@bumseatbookers.com
          </a>
        </div>
      </div>
    </footer>
  );
}
