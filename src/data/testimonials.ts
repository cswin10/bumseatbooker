export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  type: 'promoter' | 'seeker';
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "We went from 60% fill rate to 94% on weeknight shows. BumSeatBookers literally saved our comedy night.",
    author: "Marcus Chen",
    role: "Comedy Night Promoter, Bristol",
    type: "promoter"
  },
  {
    id: 2,
    quote: "Got front row seats to a sold-out-everywhere show for £12. My mates thought I had connections.",
    author: "Sophie Williams",
    role: "Deal Seeker, Exeter",
    type: "seeker"
  },
  {
    id: 3,
    quote: "The dashboard is dead simple. Set it once, forget it, wake up to full houses.",
    author: "James Morton",
    role: "Venue Manager, The Phoenix",
    type: "promoter"
  },
  {
    id: 4,
    quote: "Date night sorted for under £20. We've been to three gigs this month we never would've known about.",
    author: "Emma & Tom Richards",
    role: "Deal Seekers, Plymouth",
    type: "seeker"
  },
  {
    id: 5,
    quote: "Those 30 empty seats on a Thursday? Now they're full of people buying drinks. It's a no-brainer.",
    author: "Rachel Foster",
    role: "Owner, The Bike Shed Theatre",
    type: "promoter"
  },
  {
    id: 6,
    quote: "I've discovered so many local bands through last-minute deals. Best app on my phone.",
    author: "David Okonkwo",
    role: "Deal Seeker, Bristol",
    type: "seeker"
  }
];

export const venueLogos = [
  "The Phoenix",
  "Barnfield Theatre",
  "The Bike Shed",
  "The Louisiana",
  "Exeter Phoenix",
  "The Cavern Club",
  "Cygnet Theatre",
  "Bristol Old Vic",
];

export const stats = [
  { value: "12,847", label: "Empty seats filled", suffix: "" },
  { value: "284", label: "Revenue recovered", prefix: "£", suffix: "K" },
  { value: "94", label: "Average fill rate", suffix: "%" },
  { value: "127", label: "Partner venues", suffix: "+" },
];
