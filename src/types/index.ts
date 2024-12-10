export interface Recipe {
  id: string;
  title: string;
  image: string;
  duration: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  category: string;
  rating: number;
  userId?: string;
  video?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  subscription: SubscriptionTier;
}

export type SubscriptionTier = 'free' | 'premium' | 'professional';

export interface SubscriptionPlan {
  id: SubscriptionTier;
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
}