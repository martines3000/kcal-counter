import React, { useState } from 'react';
import { Story } from '@storybook/react';

import SliderWithInput, { SliderWithInputProps } from './SliderWithInput';

export default {
  component: SliderWithInput,
  title: 'molecules/SliderWithInput',
};

const Template: Story<SliderWithInputProps> = (args) => {
  const [value, setValue] = useState<number | number[] | string>(0);

  return <SliderWithInput value={value} setValue={setValue} label={args.label} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
};
