'use client';

import { motion } from 'framer-motion';
import { Bell, Search, Ticket, Settings, Zap, TrendingUp, Smartphone, PartyPopper } from 'lucide-react';

const seekerSteps = [
  {
    icon: Search,
    title: 'Tell us what you\'re into',
    description: 'Comedy, live music, theatre, club nights - pick your vibes and your area. Takes 30 seconds.',
    color: 'text-bum-yellow',
    bgColor: 'bg-bum-yellow/10'
  },
  {
    icon: Bell,
    title: 'Get pinged when deals drop',
    description: 'Push notifications, email, or SMS - however you want it. Only stuff you actually care about.',
    color: 'text-bum-coral',
    bgColor: 'bg-bum-coral/10'
  },
  {
    icon: Ticket,
    title: 'Grab tickets, go out',
    description: 'One tap to claim. Tickets straight to your phone. Turn up, have a great night.',
    color: 'text-green-400',
    bgColor: 'bg-green-400/10'
  }
];

const promoterSteps = [
  {
    icon: Settings,
    title: 'Connect your events',
    description: 'Manual entry or API integration with major ticketing platforms. Your events, synced automatically.',
    color: 'text-bum-yellow',
    bgColor: 'bg-bum-yellow/10'
  },
  {
    icon: Zap,
    title: 'Set your release rules',
    description: '"Release unsold at 50% off, 48 hours before" - set it once, forget it. We handle the rest.',
    color: 'text-bum-coral',
    bgColor: 'bg-bum-coral/10'
  },
  {
    icon: TrendingUp,
    title: 'Watch seats fill',
    description: 'We push to local subscribers hungry for last-minute plans. You fill seats. Revenue recovered.',
    color: 'text-green-400',
    bgColor: 'bg-green-400/10'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-bum-black relative">
      {/* Section divider */}
      <div className="section-divider mb-24" />

      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="font-display text-sm uppercase tracking-[0.3em] text-bum-yellow mb-4 block">
            How It Works
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-bum-cream">
            Dead simple.{' '}
            <span className="text-bum-coral">For everyone.</span>
          </h2>
        </motion.div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Deal Seekers Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="p-3 bg-bum-yellow/10 rounded">
                <Smartphone className="w-6 h-6 text-bum-yellow" />
              </div>
              <h3 className="font-display text-2xl font-bold text-bum-cream">
                For Deal Seekers
              </h3>
            </motion.div>

            <div className="space-y-8">
              {seekerSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-4 group"
                >
                  <div className={`flex-shrink-0 w-14 h-14 ${step.bgColor} flex items-center justify-center relative`}>
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                    <span className="absolute -top-2 -left-2 w-6 h-6 bg-bum-black border border-white/20 flex items-center justify-center text-xs font-bold text-bum-cream/60">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-bum-cream mb-1 group-hover:text-bum-yellow transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-bum-cream/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Phone mockup illustration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10 p-6 bg-gradient-to-br from-bum-grey to-bum-black border border-white/10 rounded"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-bum-coral" />
                <span className="text-sm text-bum-cream/50">Notification</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-bum-yellow/10 rounded">
                  <PartyPopper className="w-5 h-5 text-bum-yellow" />
                </div>
                <div>
                  <p className="font-display font-bold text-bum-cream text-sm">
                    Deal Alert: Comedy at The Phoenix
                  </p>
                  <p className="text-xs text-bum-cream/50 mt-1">
                    £18 tickets now £8 - 12 seats left! Ends in 2 hours.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Promoters Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="p-3 bg-bum-coral/10 rounded">
                <TrendingUp className="w-6 h-6 text-bum-coral" />
              </div>
              <h3 className="font-display text-2xl font-bold text-bum-cream">
                For Promoters
              </h3>
            </motion.div>

            <div className="space-y-8">
              {promoterSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-4 group"
                >
                  <div className={`flex-shrink-0 w-14 h-14 ${step.bgColor} flex items-center justify-center relative`}>
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                    <span className="absolute -top-2 -left-2 w-6 h-6 bg-bum-black border border-white/20 flex items-center justify-center text-xs font-bold text-bum-cream/60">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-bum-cream mb-1 group-hover:text-bum-coral transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-bum-cream/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Dashboard mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10 p-6 bg-gradient-to-br from-bum-grey to-bum-black border border-white/10 rounded"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-display font-bold text-bum-cream">This Week</span>
                <span className="text-xs text-green-400">↑ 34% vs last week</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Seats Sold', value: '127' },
                  { label: 'Revenue', value: '£1,847' },
                  { label: 'Fill Rate', value: '94%' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display text-xl font-bold text-bum-yellow">
                      {stat.value}
                    </div>
                    <div className="text-xs text-bum-cream/50">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
