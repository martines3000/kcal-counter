import { Grid, Input, makeStyles, Slider, Typography } from '@material-ui/core';
import { VolumeUp } from '@material-ui/icons';
import React from 'react';

export type SliderWithInputProps = {
  label: string;
  value: number | number[] | string;
  setValue: React.Dispatch<React.SetStateAction<number | number[] | string>>;
};

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

const SliderWithInput = ({ value, setValue, label }: SliderWithInputProps): JSX.Element => {
  const classes = useStyles();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleSliderChange = (_: unknown, newValue: number | number[]): void => {
    setValue(newValue);
  };

  const handleBlur = (): void => {
    if (value < 0 || value === '') {
      setValue(0);
    }
  };

  return (
    <div className={classes.root}>
      <Typography id='input-slider' gutterBottom>
        {label}
      </Typography>
      <Grid container spacing={2} alignItems='center'>
        <Grid item xs>
          <Slider value={typeof value === 'number' ? value : 0} onChange={handleSliderChange} aria-labelledby='input-slider' />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={value}
            margin='dense'
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
          {'%'}
        </Grid>
      </Grid>
    </div>
  );
};

export default SliderWithInput;
