'use client';

import { motion } from 'framer-motion';
import { liveDeals, categories } from '@/data/deals';
import DealCard from './DealCard';
import { useState } from 'react';
import { Ticket } from 'lucide-react';

export default function LiveDeals() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredDeals = activeCategory
    ? liveDeals.filter((deal) => deal.category === activeCategory)
    : liveDeals;

  return (
    <section id="deals" className="py-16 sm:py-24 bg-bum-grey/30 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-ticket-pattern opacity-50" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bum-coral opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-bum-coral" />
            </span>
            <span className="font-display text-sm uppercase tracking-[0.3em] text-bum-coral">
              Live Now
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-bum-cream mb-4">
            Tonight&apos;s{' '}
            <span className="text-bum-yellow">Deals</span>
          </h2>
          <p className="text-bum-cream/60 max-w-xl mx-auto text-sm sm:text-base px-4">
            Grab these before they&apos;re gone. New deals drop every hour.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12 px-2"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-display font-bold uppercase tracking-wider transition-all ${
              activeCategory === null
                ? 'bg-bum-yellow text-bum-black'
                : 'bg-bum-grey text-bum-cream/60 hover:text-bum-cream border border-white/10'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-display font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? 'bg-bum-yellow text-bum-black'
                  : 'bg-bum-grey text-bum-cream/60 hover:text-bum-cream border border-white/10'
              }`}
            >
              <span className="hidden sm:inline">{cat.emoji} </span>{cat.label}
            </button>
          ))}
        </motion.div>

        {/* Deals grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredDeals.map((deal, index) => (
            <DealCard key={deal.id} deal={deal} index={index} />
          ))}
        </div>

        {/* Empty state */}
        {filteredDeals.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Ticket className="w-16 h-16 text-bum-cream/20 mx-auto mb-4" />
            <p className="text-bum-cream/60">
              No deals in this category right now. Check back soon!
            </p>
          </motion.div>
        )}

        {/* Load more / CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-bum-cream/50 text-sm mb-4">
            New deals drop every hour. Don&apos;t miss out.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-bum-yellow text-bum-yellow font-display font-bold uppercase tracking-wider hover:bg-bum-yellow hover:text-bum-black transition-all"
          >
            Get Deal Alerts
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
