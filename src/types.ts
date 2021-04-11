export type FoodType = 'NOT_SPECIFIED' | 'VEGETABLES' | 'FRUITS' | 'NUTS' | 'MEATS' | 'SWEETS' | 'PASTRY' | 'FISH' | 'CARB';

export type Food = {
  id: string;
  name: string;
  kcal: number;
  owner: string | null;
  foodType?: FoodType;
};
