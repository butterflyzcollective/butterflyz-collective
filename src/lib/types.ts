export type DJ = {
  name: string;
  slug: string;
  city: string;
  photoUrl: string;
  tagline: string;
  genres: string[];
  eventTypes: string[];
  rating: number;
  reviewCount: number;
  bookingEmail: string;
  bookingLink?: string; // optional booking link
  about: string;
  whatIPlay: string[];
  availabilityLabel?: string;
  leadTimeDays?: number;
};

