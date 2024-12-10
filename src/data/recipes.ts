import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Bacalhau à Brás',
    image: 'https://images.unsplash.com/photo-1614548539644-0b68d5a2d1a3?auto=format&fit=crop&w=800',
    duration: '45 min',
    difficulty: 'Médio',
    category: 'Pratos Principais',
    rating: 4.8
  },
  {
    id: '2',
    title: 'Pastéis de Nata',
    image: 'https://images.unsplash.com/photo-1577390584926-61e46e644538?auto=format&fit=crop&w=800',
    duration: '1h',
    difficulty: 'Difícil',
    category: 'Sobremesas',
    rating: 4.9
  },
  {
    id: '3',
    title: 'Caldo Verde',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800',
    duration: '40 min',
    difficulty: 'Fácil',
    category: 'Sopas',
    rating: 4.7
  }
];