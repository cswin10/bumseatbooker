'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, Check, Mail } from 'lucide-react';
import Input from './Input';
import Button from './Button';
import { categories } from '@/data/deals';

export default function FinalCTA() {
  const [seekerEmail, setSeekerEmail] = useState('');
  const [promoterEmail, setPromoterEmail] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [seekerSubmitted, setSeekerSubmitted] = useState(false);
  const [promoterSubmitted, setPromoterSubmitted] = useState(false);

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSeekerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (seekerEmail) {
      setSeekerSubmitted(true);
    }
  };

  const handlePromoterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoterEmail) {
      setPromoterSubmitted(true);
    }
  };

  return (
    <section className="py-24 bg-bum-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-bum-yellow/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-bum-coral/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-bum-cream mb-4">
            Ready to{' '}
            <span className="text-bum-yellow">fill some seats?</span>
          </h2>
          <p className="text-bum-cream/60 max-w-xl mx-auto">
            Join thousands of venues and deal-seekers already on the platform.
          </p>
        </motion.div>

        {/* Two column CTAs */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Deal Seekers */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-bum-yellow to-bum-coral opacity-20 blur-sm" />
            <div className="relative bg-bum-grey/50 border border-bum-yellow/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-bum-yellow/10">
                  <Zap className="w-6 h-6 text-bum-yellow" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-bum-cream">
                    For Deal Seekers
                  </h3>
                  <p className="text-bum-cream/50 text-sm">
                    Never miss a last-minute deal
                  </p>
                </div>
              </div>

              {seekerSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-bum-cream mb-2">
                    You&apos;re in!
                  </h4>
                  <p className="text-bum-cream/60">
                    Check your inbox for a confirmation email.
                    Deals coming your way soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSeekerSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={seekerEmail}
                    onChange={setSeekerEmail}
                    icon={<Mail size={18} />}
                  />

                  <div>
                    <p className="text-sm text-bum-cream/60 mb-3">
                      What are you into?
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => toggleInterest(cat.id)}
                          className={`px-3 py-1.5 text-sm transition-all ${
                            selectedInterests.includes(cat.id)
                              ? 'bg-bum-yellow text-bum-black font-bold'
                              : 'bg-bum-grey border border-white/10 text-bum-cream/60 hover:text-bum-cream'
                          }`}
                        >
                          {cat.emoji} {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button type="submit" variant="primary" className="w-full">
                    Get Deal Alerts
                    <ArrowRight size={18} />
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Promoters */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-bum-coral to-bum-yellow opacity-20 blur-sm" />
            <div className="relative bg-bum-grey/50 border border-bum-coral/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-bum-coral/10">
                  <Users className="w-6 h-6 text-bum-coral" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-bum-cream">
                    For Promoters
                  </h3>
                  <p className="text-bum-cream/50 text-sm">
                    Stop leaving money on the table
                  </p>
                </div>
              </div>

              {promoterSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-bum-cream mb-2">
                    Request received!
                  </h4>
                  <p className="text-bum-cream/60">
                    Our team will be in touch within 24 hours
                    to get you set up.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handlePromoterSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="your@venue.com"
                    value={promoterEmail}
                    onChange={setPromoterEmail}
                    icon={<Mail size={18} />}
                  />

                  <div className="bg-bum-black/50 p-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-bum-cream/70">
                      <Check className="w-4 h-4 text-green-400" />
                      <span>Free to start - no upfront costs</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-bum-cream/70">
                      <Check className="w-4 h-4 text-green-400" />
                      <span>Set up in under 10 minutes</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-bum-cream/70">
                      <Check className="w-4 h-4 text-green-400" />
                      <span>Cancel anytime</span>
                    </div>
                  </div>

                  <Button type="submit" variant="primary" className="w-full">
                    Request Demo
                    <ArrowRight size={18} />
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
