import type { ClothingItem } from '../types/clothing';

export const mockClothingItems: ClothingItem[] = [
  {
    id: '1',
    name: 'Summer Midi Dress',
    type: 'dress',
    style: 'casual',
    lengthCm: 110,
    price: 59,
    image: 'https://placehold.co/400x500?text=Dress',
    description: 'Light midi dress for warm days',
  },
  {
    id: '2',
    name: 'Classic Jeans',
    type: 'jeans',
    style: 'casual',
    lengthCm: 100,
    price: 79,
    image: 'https://placehold.co/400x500?text=Jeans',
    description: 'Classic straight fit jeans',
  },
  {
    id: '3',
    name: 'Oversized Sweater',
    type: 'sweater',
    style: 'casual',
    lengthCm: 65,
    price: 49,
    image: 'https://placehold.co/400x500?text=Sweater',
    description: 'Cozy oversized knit sweater',
  },
  {
    id: '4',
    name: 'Evening Dress',
    type: 'dress',
    style: 'formal',
    lengthCm: 140,
    price: 120,
    image: 'https://placehold.co/400x500?text=Evening+Dress',
    description: 'Elegant floor-length evening dress',
  },
];