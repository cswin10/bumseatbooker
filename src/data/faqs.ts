export interface FAQ {
  id: number;
  question: string;
  answer: string;
  audience: 'promoter' | 'seeker' | 'both';
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "How do I get paid as a promoter?",
    answer: "Payments are processed weekly via bank transfer. You'll see all transactions in your dashboard, and we send detailed statements every Monday. We take our commission at point of sale, so you receive the net amount directly.",
    audience: "promoter"
  },
  {
    id: 2,
    question: "When do deals go live?",
    answer: "You set the rules. Most promoters release deals 24-72 hours before showtime, but you have full control. Set it once and forget it, or adjust per event. Your tickets, your rules.",
    audience: "promoter"
  },
  {
    id: 3,
    question: "Can I control which events get discounted?",
    answer: "Absolutely. You can exclude specific shows (like your sold-out Saturday nights), set different discount levels per event type, or manually approve each release. The platform adapts to how you work.",
    audience: "promoter"
  },
  {
    id: 4,
    question: "How do I receive deal alerts?",
    answer: "You choose: push notifications, email, SMS, or all three. Tell us what you're into (comedy, music, theatre, etc.) and your location, and we'll only ping you with relevant deals. No spam, ever.",
    audience: "seeker"
  },
  {
    id: 5,
    question: "Are the tickets guaranteed?",
    answer: "Yes. Every ticket sold through BumSeatBookers is legitimate and guaranteed entry. If there's ever an issue (extremely rare), we'll refund you in full, no questions asked.",
    audience: "seeker"
  },
  {
    id: 6,
    question: "Why are the discounts so big?",
    answer: "Empty seats make £0 after the show starts. Promoters would rather get 50% of the ticket price than nothing. You're not getting dodgy tickets - you're getting smart tickets.",
    audience: "seeker"
  },
  {
    id: 7,
    question: "Is my data safe?",
    answer: "We only collect what we need to send you relevant deals. We never sell your data. Payment processing is handled by Stripe - we never see your card details. Full privacy policy available on request.",
    audience: "both"
  },
  {
    id: 8,
    question: "What's the catch?",
    answer: "No catch. Promoters fill seats that would've been empty. You get cheap nights out. We take a small commission for making the connection. Everyone wins. That's literally the whole business model.",
    audience: "both"
  }
];
