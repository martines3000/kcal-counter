import { Chip, Input, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import MacroNumbers from '../../atoms/MacroNumbers/MacroNumbers';
import SliderWithInput from '../../molecules/SliderWithInput/SliderWithInput';

// export type MacroCouterProps = {};
type Macros = {
  carbs: number;
  fat: number;
  protein: number;
};

const MacroCounter = (): JSX.Element => {
  const [carbsPercent, setCarbsPercent] = useState<number | number[] | string>(50);
  const [fatPercent, setFatPercent] = useState<number | number[] | string>(15);
  const [proteinPercent, setProteinPercent] = useState<number | number[] | string>(35);
  const [totalCalories, setTotalCalories] = useState<number | string>(2000);
  const [error, setError] = useState(false);

  const [macros, setMacros] = useState<Macros>({ carbs: 0, fat: 0, protein: 0 });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTotalCalories(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = (): void => {
    if (totalCalories < 0 || totalCalories === '') {
      setTotalCalories(0);
    }
  };

  const calculateMacros = (): void => {
    if (typeof totalCalories === 'number') {
      let percentTotal = 0;
      if (typeof carbsPercent === 'number') {
        percentTotal += carbsPercent;
        setMacros((prevMacros) => ({ ...prevMacros, carbs: Math.round((totalCalories / 400) * carbsPercent) }));
      }
      if (typeof fatPercent === 'number') {
        percentTotal += fatPercent;
        setMacros((prevMacros) => ({ ...prevMacros, fat: Math.round((totalCalories / 900) * fatPercent) }));
      }
      if (typeof proteinPercent === 'number') {
        percentTotal += proteinPercent;
        setMacros((prevMacros) => ({ ...prevMacros, protein: Math.round((totalCalories / 400) * proteinPercent) }));
      }
      if (percentTotal > 100) setError(true);
      else setError(false);
    }
  };

  useEffect(() => {
    calculateMacros();
  }, [carbsPercent, fatPercent, proteinPercent, totalCalories]);

  return (
    <div>
      <Typography id='total-calories' gutterBottom>
        Total calories
      </Typography>
      <Input aria-labelledby='total-calories' value={totalCalories} onChange={handleInputChange} onBlur={handleBlur} />
      <SliderWithInput label='Carbohydrates' value={carbsPercent} setValue={setCarbsPercent} />
      <SliderWithInput label='Protein' value={proteinPercent} setValue={setProteinPercent} />
      <SliderWithInput label='Fat' value={fatPercent} setValue={setFatPercent} />
      <MacroNumbers {...macros} />
      {error && <div>The percentage total is more than 100%</div>}
    </div>
  );
};

export default MacroCounter;
