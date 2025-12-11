'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { testimonials, venueLogos, stats } from '@/data/testimonials';
import { Quote, Star } from 'lucide-react';

function AnimatedNumber({ value, prefix = '', suffix = '' }: { value: string; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    const numericValue = parseInt(value.replace(/,/g, ''));
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current).toLocaleString());
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-24 bg-bum-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-bum-yellow/30 to-transparent" />

      <div className="container-custom">
        {/* Big numbers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-bum-yellow mb-2">
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix || ''}
                  suffix={stat.suffix || ''}
                />
              </div>
              <div className="text-bum-cream/50 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-display text-sm uppercase tracking-[0.3em] text-bum-yellow mb-4 block">
            What They Say
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-bum-cream">
            Real people.{' '}
            <span className="text-bum-coral">Real results.</span>
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-bum-grey/50 border border-white/5 p-6 pt-14 group hover:border-bum-yellow/30 transition-colors"
            >
              {/* Type badge - at top */}
              <div className={`absolute top-4 left-4 text-xs font-bold uppercase tracking-wider px-2 py-1 ${
                testimonial.type === 'promoter'
                  ? 'bg-bum-coral/10 text-bum-coral'
                  : 'bg-bum-yellow/10 text-bum-yellow'
              }`}>
                {testimonial.type === 'promoter' ? 'Promoter' : 'Deal Seeker'}
              </div>
              <Quote className="absolute top-4 right-4 w-8 h-8 text-bum-yellow/10 group-hover:text-bum-yellow/20 transition-colors" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-bum-yellow fill-bum-yellow" />
                ))}
              </div>
              <p className="text-bum-cream/80 mb-4 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-bum-yellow to-bum-coral flex items-center justify-center text-bum-black font-bold text-sm">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-display font-bold text-bum-cream text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-bum-cream/50 text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Venue logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-bum-cream/40 text-sm uppercase tracking-wider mb-8">
            Trusted by venues across the South West
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {venueLogos.map((venue, i) => (
              <motion.div
                key={venue}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="font-display text-lg md:text-xl font-bold text-bum-cream/30 hover:text-bum-cream/50 transition-colors"
              >
                {venue}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
