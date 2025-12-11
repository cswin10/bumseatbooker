export interface Deal {
  id: number;
  title: string;
  venue: string;
  originalPrice: number;
  dealPrice: number;
  category: 'comedy' | 'music' | 'theatre' | 'club' | 'other';
  timeRemaining: string;
  seatsLeft: number;
  date: string;
  time: string;
}

export const liveDeals: Deal[] = [
  {
    id: 1,
    title: "Comedy Night at The Phoenix",
    venue: "The Phoenix, Exeter",
    originalPrice: 18,
    dealPrice: 8,
    category: "comedy",
    timeRemaining: "2 hours",
    seatsLeft: 12,
    date: "Tonight",
    time: "8:00 PM"
  },
  {
    id: 2,
    title: "Indie Night - Local Bands Live",
    venue: "The Cavern Club, Exeter",
    originalPrice: 12,
    dealPrice: 5,
    category: "music",
    timeRemaining: "4 hours",
    seatsLeft: 23,
    date: "Tonight",
    time: "9:00 PM"
  },
  {
    id: 3,
    title: "Improv Jam - Anything Goes",
    venue: "Barnfield Theatre, Exeter",
    originalPrice: 15,
    dealPrice: 7,
    category: "comedy",
    timeRemaining: "Tomorrow 7pm",
    seatsLeft: 8,
    date: "Tomorrow",
    time: "7:00 PM"
  },
  {
    id: 4,
    title: "DJ Night: House & Techno",
    venue: "Move, Exeter",
    originalPrice: 15,
    dealPrice: 6,
    category: "club",
    timeRemaining: "Tonight 10pm",
    seatsLeft: 45,
    date: "Tonight",
    time: "10:00 PM"
  },
  {
    id: 5,
    title: "Open Mic Night",
    venue: "The Old Firehouse, Exeter",
    originalPrice: 8,
    dealPrice: 3,
    category: "music",
    timeRemaining: "3 hours",
    seatsLeft: 15,
    date: "Tonight",
    time: "7:30 PM"
  },
  {
    id: 6,
    title: "Fringe Theatre: One Woman Show",
    venue: "Cygnet Theatre, Exeter",
    originalPrice: 22,
    dealPrice: 10,
    category: "theatre",
    timeRemaining: "5 hours",
    seatsLeft: 6,
    date: "Tonight",
    time: "7:30 PM"
  },
  {
    id: 7,
    title: "Jazz Evening - The Bristol Quartet",
    venue: "The Louisiana, Bristol",
    originalPrice: 16,
    dealPrice: 7,
    category: "music",
    timeRemaining: "6 hours",
    seatsLeft: 18,
    date: "Tonight",
    time: "8:30 PM"
  },
  {
    id: 8,
    title: "Stand-up Showcase: New Talent",
    venue: "The Bike Shed Theatre, Exeter",
    originalPrice: 14,
    dealPrice: 6,
    category: "comedy",
    timeRemaining: "Tomorrow 8pm",
    seatsLeft: 22,
    date: "Tomorrow",
    time: "8:00 PM"
  }
];

export const categories = [
  { id: 'comedy', label: 'Comedy', emoji: '🎤' },
  { id: 'music', label: 'Live Music', emoji: '🎸' },
  { id: 'theatre', label: 'Theatre', emoji: '🎭' },
  { id: 'club', label: 'Club Nights', emoji: '🎧' },
  { id: 'other', label: 'Other', emoji: '✨' },
];
