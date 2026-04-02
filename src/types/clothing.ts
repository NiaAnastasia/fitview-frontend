export type ClothingType = 'dress' | 'jeans' | 'sweater';

export type ClothingStyle = 'casual' | 'formal' | 'sport';

export interface ClothingItem {
  id: string;
  name: string;
  type: ClothingType;
  style: ClothingStyle;
  lengthCm: number;
  price: number;
  image: string;
  description: string;
}