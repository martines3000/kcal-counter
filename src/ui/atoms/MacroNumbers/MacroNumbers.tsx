import { Chip } from '@material-ui/core';
import React from 'react';

export type MacroNumbersProps = {
  carbs: number;
  fat: number;
  protein: number;
};

const MacroNumbers = ({ carbs, fat, protein }: MacroNumbersProps): JSX.Element => {
  return (
    <div>
      <Chip variant='outlined' color='primary' label={`Carbs: ${carbs}g`} />
      <Chip variant='outlined' color='primary' label={`Fat: ${fat}g`} />
      <Chip variant='outlined' color='primary' label={`Protein: ${protein}g`} />
    </div>
  );
};

export default MacroNumbers;
