export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  benefits: string[];
  equipment: string;
  duration: string;
  isFree?: boolean;
  image: string;
}

export type FrameCategory = 'todos' | 'clasicos' | 'deportivos' | 'sol' | 'infantiles';

export interface FrameProduct {
  id: string;
  name: string;
  brand: string;
  category: FrameCategory;
  categoryName: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  rating: number;
  reviewCount: number;
  material: string;
  shape: string;
  colors: string[];
  image: string;
  description: string;
  features: string[];
  lensTypeIncluded: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  whatsapp: string;
  scheduleWeek: string;
  scheduleSat: string;
  mapUrl?: string;
  isMain?: boolean;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  branch: string;
  service: string;
  date: string;
  timeSlot: string;
  notes: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  date: string;
  image: string;
  verified: boolean;
  branch: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
