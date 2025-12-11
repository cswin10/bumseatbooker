'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, Ticket } from 'lucide-react';
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bum-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bum-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-bum-coral/10 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, #FFE500 1px, transparent 1px), linear-gradient(to bottom, #FFE500 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-custom relative z-10 pt-28 sm:pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Live indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-bum-grey/50 border border-bum-coral/30 rounded-full mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bum-coral opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-bum-coral" />
            </span>
            <span className="text-sm font-medium text-bum-cream/80">
              127 deals live right now
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight mb-6"
          >
            <span className="text-bum-cream">Empty seats are</span>
            <br />
            <span className="text-bum-yellow glow-text">dead money.</span>
            <br />
            <span className="text-bum-coral">We fix that.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-bum-cream/70 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
          >
            The last-minute ticket marketplace that fills venues and gives
            spontaneous people cheap nights out.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 w-full max-w-md sm:max-w-none mx-auto"
          >
            <Button
              variant="primary"
              size="lg"
              icon={<Zap size={20} />}
            >
              I Want Deals
              <ArrowRight size={18} className="ml-1" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={<Users size={20} />}
            >
              I&apos;m a Promoter
            </Button>
          </motion.div>

          {/* Stats ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16 pt-8 border-t border-white/10"
          >
            {[
              { value: '12,847', label: 'Seats filled' },
              { value: '£284K', label: 'Recovered' },
              { value: '127+', label: 'Venues' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-2xl md:text-3xl font-black text-bum-yellow">
                  {stat.value}
                </div>
                <div className="text-sm text-bum-cream/50">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating ticket stubs - positioned away from text */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [12, 15, 12],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-32 right-4 xl:right-16 hidden xl:block opacity-40 pointer-events-none"
        >
          <div className="bg-bum-grey p-4 border border-white/10 transform rotate-12 shadow-2xl">
            <Ticket className="w-12 h-12 text-bum-yellow/50" />
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [-15, -12, -15],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-48 left-4 xl:left-16 hidden xl:block opacity-40 pointer-events-none"
        >
          <div className="bg-bum-grey p-4 border border-white/10 transform -rotate-12 shadow-2xl">
            <Ticket className="w-10 h-10 text-bum-coral/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
