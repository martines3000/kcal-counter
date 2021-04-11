import React, { useState } from 'react';
import { usePublicFood } from '../../../contexts/PublicFoodContext';
import ListFood from '../../organisms/ListFood/ListFood';

const Food = (): JSX.Element => {
  const { publicFood } = usePublicFood();

  return (
    <div>
      <ListFood foodArray={publicFood} />
    </div>
  );
};

export default Food;
