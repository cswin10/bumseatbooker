'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '@/data/faqs';

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'promoter' | 'seeker'>('all');

  const filteredFaqs = faqs.filter((faq) => {
    if (filter === 'all') return true;
    return faq.audience === filter || faq.audience === 'both';
  });

  return (
    <section id="faq" className="py-24 bg-bum-grey/20 relative">
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-display text-sm uppercase tracking-[0.3em] text-bum-yellow mb-4 block">
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-bum-cream mb-4">
            Got questions?{' '}
            <span className="text-bum-coral">Good.</span>
          </h2>
          <p className="text-bum-cream/60 max-w-xl mx-auto">
            If it&apos;s not here, just ask. We&apos;re not precious about this stuff.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-12"
        >
          {[
            { id: 'all', label: 'All' },
            { id: 'seeker', label: 'Deal Seekers' },
            { id: 'promoter', label: 'Promoters' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as typeof filter)}
              className={`px-4 py-2 text-sm font-display font-bold uppercase tracking-wider transition-all ${
                filter === tab.id
                  ? 'bg-bum-yellow text-bum-black'
                  : 'bg-bum-grey text-bum-cream/60 hover:text-bum-cream border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* FAQ items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.map((faq, i) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-white/10 bg-bum-grey/30"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <div className="flex items-start gap-4 pr-4">
                  <HelpCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors ${
                    openId === faq.id ? 'text-bum-yellow' : 'text-bum-cream/40 group-hover:text-bum-yellow'
                  }`} />
                  <span className={`font-display font-bold transition-colors ${
                    openId === faq.id ? 'text-bum-yellow' : 'text-bum-cream group-hover:text-bum-yellow'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-colors ${
                    openId === faq.id ? 'text-bum-yellow' : 'text-bum-cream/40'
                  }`} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-16">
                      <p className="text-bum-cream/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-bum-cream/50 mb-4">
            Still got questions?
          </p>
          <a
            href="mailto:hello@bumseatbookers.com"
            className="inline-flex items-center gap-2 text-bum-yellow font-display font-bold hover:underline"
          >
            Drop us a line
          </a>
        </motion.div>
      </div>
    </section>
  );
}
