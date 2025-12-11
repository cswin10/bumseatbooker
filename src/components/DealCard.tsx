'use client';

import { motion } from 'framer-motion';
import { Clock, Users, MapPin, Ticket } from 'lucide-react';
import type { Deal } from '@/data/deals';

interface DealCardProps {
  deal: Deal;
  index: number;
}

const categoryColors = {
  comedy: 'from-yellow-500/20 to-orange-500/20',
  music: 'from-purple-500/20 to-pink-500/20',
  theatre: 'from-red-500/20 to-rose-500/20',
  club: 'from-blue-500/20 to-cyan-500/20',
  other: 'from-gray-500/20 to-slate-500/20'
};

const categoryLabels = {
  comedy: 'Comedy',
  music: 'Live Music',
  theatre: 'Theatre',
  club: 'Club Night',
  other: 'Event'
};

export default function DealCard({ deal, index }: DealCardProps) {
  const discount = Math.round((1 - deal.dealPrice / deal.originalPrice) * 100);
  const isUrgent = deal.seatsLeft < 10;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-bum-yellow to-bum-coral rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

      <div className={`relative bg-gradient-to-br ${categoryColors[deal.category]} backdrop-blur-sm border border-white/10 overflow-hidden`}>
        {/* Ticket stub perforations */}
        <div className="absolute right-0 top-0 bottom-0 w-6 flex flex-col justify-center gap-1">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-bum-black" />
          ))}
        </div>

        <div className="p-5 pr-8">
          {/* Category & Urgency */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-display uppercase tracking-wider text-bum-cream/60">
              {categoryLabels[deal.category]}
            </span>
            {isUrgent && (
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-xs font-bold text-bum-coral flex items-center gap-1"
              >
                <span className="w-2 h-2 rounded-full bg-bum-coral animate-pulse" />
                Only {deal.seatsLeft} left!
              </motion.span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-display text-xl font-bold text-bum-cream mb-2 group-hover:text-bum-yellow transition-colors">
            {deal.title}
          </h3>

          {/* Venue */}
          <div className="flex items-center gap-1.5 text-bum-cream/60 text-sm mb-4">
            <MapPin size={14} />
            <span>{deal.venue}</span>
          </div>

          {/* Time & Date */}
          <div className="flex items-center gap-4 text-sm mb-4">
            <div className="flex items-center gap-1.5 text-bum-cream/70">
              <Clock size={14} />
              <span>{deal.date} @ {deal.time}</span>
            </div>
            <div className="flex items-center gap-1.5 text-bum-cream/70">
              <Users size={14} />
              <span>{deal.seatsLeft} seats</span>
            </div>
          </div>

          {/* Price & CTA */}
          <div className="flex items-end justify-between pt-3 border-t border-white/10">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl font-black text-bum-yellow">
                £{deal.dealPrice}
              </span>
              <span className="text-bum-cream/40 line-through text-sm">
                £{deal.originalPrice}
              </span>
              <span className="text-bum-coral text-sm font-bold">
                -{discount}%
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-bum-yellow text-bum-black font-display font-bold px-4 py-2 text-sm uppercase tracking-wider hover:bg-bum-cream transition-colors"
            >
              <Ticket size={16} />
              Claim
            </motion.button>
          </div>

          {/* Time remaining badge */}
          <div className="absolute top-4 right-10 bg-bum-black/80 px-2 py-1 text-xs font-bold text-bum-coral">
            {deal.timeRemaining}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
