import type { ClothingItem } from '../types/clothing';

export const mockClothingItems: ClothingItem[] = [
  {
    id: '1',
    name: 'Summer Midi Dress',
    brand: 'Zara',
    category: 'dress',
    imageUrl: 'https://placehold.co/400x500?text=Dress',
    sizes: [
      {
        sizeLabel: 'S',
        totalLengthCm: 110,
        inseamCm: 0,
        waistCm: 68,
        breastCm: 88,
        shouldersCm: 38,
      },
    ],
  },
  {
    id: '2',
    name: 'Classic Jeans',
    brand: 'Levis',
    category: 'pants',
    imageUrl: 'https://placehold.co/400x500?text=Jeans',
    sizes: [
      {
        sizeLabel: 'M',
        totalLengthCm: 100,
        inseamCm: 76,
        waistCm: 72,
        breastCm: 0,
        shouldersCm: 0,
      },
    ],
  },
  {
    id: '3',
    name: 'Oversized Sweater',
    brand: 'HM',
    category: 't_shirt',
    imageUrl: 'https://placehold.co/400x500?text=Sweater',
    sizes: [
      {
        sizeLabel: 'L',
        totalLengthCm: 65,
        inseamCm: 0,
        waistCm: 80,
        breastCm: 100,
        shouldersCm: 44,
      },
    ],
  },
];