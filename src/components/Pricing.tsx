'use client';

import { motion } from 'framer-motion';
import { Check, Zap, Building2, Crown } from 'lucide-react';
import Button from './Button';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for getting started',
    price: 'Free',
    priceDetail: '20% commission',
    icon: Zap,
    features: [
      'Up to 5 events per month',
      'Basic deal alerts to subscribers',
      'Email support',
      'Standard placement',
      'Weekly payouts'
    ],
    cta: 'Start Free',
    popular: false
  },
  {
    name: 'Pro',
    description: 'For serious promoters',
    price: '£49',
    priceDetail: '15% commission',
    icon: Crown,
    features: [
      'Unlimited events',
      'Priority deal placement',
      'Analytics dashboard',
      'API integration',
      'Dedicated account manager',
      'Same-day payouts',
      'Custom release rules'
    ],
    cta: 'Go Pro',
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For venues & networks',
    price: 'Custom',
    priceDetail: 'Volume discounts',
    icon: Building2,
    features: [
      'Everything in Pro',
      'Multi-venue management',
      'White-label options',
      'Custom API development',
      'Dedicated success team',
      'SLA guarantees',
      'Custom reporting'
    ],
    cta: 'Talk to Sales',
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-bum-black relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bum-grey/30 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-display text-sm uppercase tracking-[0.3em] text-bum-yellow mb-4 block">
            Pricing for Promoters
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-bum-cream mb-4">
            Only pay when{' '}
            <span className="text-bum-coral">seats fill</span>
          </h2>
          <p className="text-bum-cream/60 max-w-xl mx-auto">
            Zero upfront costs. We only make money when you do.
            That&apos;s how it should be.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-bum-yellow text-bum-black font-display text-xs font-bold uppercase tracking-wider px-4 py-1">
                  Most Popular
                </div>
              )}

              <div className={`h-full flex flex-col p-8 ${
                plan.popular
                  ? 'bg-gradient-to-b from-bum-yellow/10 to-bum-coral/5 border-2 border-bum-yellow'
                  : 'bg-bum-grey/30 border border-white/10'
              }`}>
                {/* Icon & Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 ${plan.popular ? 'bg-bum-yellow/20' : 'bg-white/5'}`}>
                    <plan.icon className={`w-5 h-5 ${plan.popular ? 'text-bum-yellow' : 'text-bum-cream/60'}`} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-bum-cream">
                      {plan.name}
                    </h3>
                    <p className="text-bum-cream/50 text-sm">{plan.description}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className={`font-display text-4xl font-black ${
                      plan.popular ? 'text-bum-yellow' : 'text-bum-cream'
                    }`}>
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && plan.price !== 'Free' && (
                      <span className="text-bum-cream/50">/month</span>
                    )}
                  </div>
                  <p className="text-bum-cream/60 text-sm mt-1">{plan.priceDetail}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'text-bum-yellow' : 'text-green-400'
                      }`} />
                      <span className="text-bum-cream/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.popular ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-bum-cream/40 text-sm mt-12"
        >
          All plans include secure payment processing via Stripe. Cancel anytime.
        </motion.p>
      </div>
    </section>
  );
}
