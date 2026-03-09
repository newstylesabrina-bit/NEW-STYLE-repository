
export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  image: string;
  forWho: string;
  problem: string;
  steps: string[];
  maintenance: string;
  bookingUrl?: string;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  isPremium?: boolean;
  image?: string;
  forWho?: string;
  problem?: string;
  homeCare?: string;
  whatsappUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}
