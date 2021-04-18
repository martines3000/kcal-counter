import React from 'react';
import { FoodType } from '../../../types';
import { GiMeat, GiPeanut, GiDoubleFish, GiShinyApple, GiCarrot, GiCakeSlice, GiWrappedSweet, GiSlicedBread } from 'react-icons/gi';
import { GrChrome } from 'react-icons/gr';

export type FoodIconProps = {
  foodType: FoodType | undefined;
};

const FoodIcon = ({ foodType }: FoodIconProps): JSX.Element => {
  switch (foodType) {
    case 'MEATS':
      return <GiMeat />;
    case 'FRUITS':
      return <GiShinyApple />;
    case 'VEGETABLES':
      return <GiCarrot />;
    case 'FISH':
      return <GiDoubleFish />;
    case 'NUTS':
      return <GiPeanut />;
    case 'PASTRY':
      return <GiCakeSlice />;
    case 'SWEETS':
      return <GiWrappedSweet />;
    case 'CARBS':
      return <GiSlicedBread />;
    default:
      return <GrChrome />;
  }
};

export default FoodIcon;
