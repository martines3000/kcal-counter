import { Food } from '../types';

export const kinderSurprise: Food = {
  id: '1',
  name: 'Kinder jajčka',
  kcal: 123,
  foodType: 'SWEETS',
  owner: 'id-martin',
  carbs: 10,
  proteins: 20,
  fats: 5,
};

const chickenBreast: Food = {
  id: '2',
  name: 'Piščančje prsi',
  kcal: 101,
  foodType: 'MEATS',
  owner: 'id-martin',
  carbs: 10,
  proteins: 20,
  fats: 5,
};

const orange: Food = {
  id: '3',
  name: 'Pomaranče',
  kcal: 38,
  foodType: 'FRUITS',
  owner: 'id-martin',
  carbs: 10,
  proteins: 20,
  fats: 5,
};

const tomato: Food = {
  id: '4',
  name: 'Paradajz',
  kcal: 68,
  foodType: 'VEGETABLES',
  owner: 'id-martin',
  carbs: 10,
  proteins: 20,
  fats: 5,
};

const oats: Food = {
  id: '5',
  name: 'Ovseni kosmiči',
  kcal: 389,
  foodType: 'CARBS',
  owner: 'id-martin',
  carbs: 10,
  proteins: 20,
  fats: 5,
};

export const foodArray: Food[] = [kinderSurprise, chickenBreast, orange, tomato, oats];
