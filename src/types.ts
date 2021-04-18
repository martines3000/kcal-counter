export type FoodType = 'NOT_SPECIFIED' | 'VEGETABLES' | 'FRUITS' | 'NUTS' | 'MEATS' | 'SWEETS' | 'PASTRY' | 'FISH' | 'CARBS';
export const foodTypes = ['NOT_SPECIFIED', 'VEGETABLES', 'FRUITS', 'NUTS', 'MEATS', 'SWEETS', 'PASTRY', 'FISH', 'CARBS'];

export type Food = {
  id: string;
  name: string;
  kcal: number;
  owner: string | null;
  foodType?: FoodType;
};

export type IntakeFood = Food & {
  foodId: string;
};
