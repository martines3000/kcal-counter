import { Food } from '../types';

export const kinderSurprise: Food = {
  id: '1',
  name: 'Kinder jajčka',
  kcal: 123,
  foodType: 'SWEETS',
  owner: 'id-martin',
};

const chickenBreast: Food = {
  id: '2',
  name: 'Piščančje prsi',
  kcal: 101,
  foodType: 'MEATS',
  owner: 'id-martin',
};

const orange: Food = {
  id: '3',
  name: 'Pomaranče',
  kcal: 38,
  foodType: 'FRUITS',
  owner: 'id-martin',
};

const tomato: Food = {
  id: '4',
  name: 'Paradajz',
  kcal: 68,
  foodType: 'VEGETABLES',
  owner: 'id-martin',
};

const oats: Food = {
  id: '5',
  name: 'Ovseni kosmiči',
  kcal: 389,
  foodType: 'CARBS',
  owner: 'id-martin',
};

export const foodArray: Food[] = [kinderSurprise, chickenBreast, orange, tomato, oats];
