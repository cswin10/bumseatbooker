'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Ticket } from 'lucide-react';
import Button from './Button';

const navLinks = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#deals', label: 'Live Deals' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-bum-black/95 backdrop-blur-md border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative">
                <Ticket className="w-8 h-8 text-bum-yellow transform -rotate-12 group-hover:rotate-0 transition-transform" />
                <div className="absolute inset-0 bg-bum-yellow/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="font-display text-xl md:text-2xl font-black tracking-tight">
                <span className="text-bum-yellow">Bum</span>
                <span className="text-bum-cream">Seat</span>
                <span className="text-bum-coral">Bookers</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-bum-cream/70 hover:text-bum-yellow transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bum-yellow group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" size="sm">
                I&apos;m a Promoter
              </Button>
              <Button variant="primary" size="sm">
                Get Deals
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-bum-cream p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bum-black pt-24 md:hidden"
          >
            <div className="container-custom">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display text-2xl font-bold text-bum-cream hover:text-bum-yellow transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
                  <Button variant="secondary" className="w-full">
                    I&apos;m a Promoter
                  </Button>
                  <Button variant="primary" className="w-full">
                    Get Deals
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
