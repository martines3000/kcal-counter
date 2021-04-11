import React, { useState } from 'react';
import { Story } from '@storybook/react';

import MacroNumbers, { MacroNumbersProps } from './MacroNumbers';

export default {
  component: MacroNumbers,
  title: 'atoms/MacroNumbers',
};

const Template: Story<MacroNumbersProps> = (args) => {
  return <MacroNumbers {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  carbs: 0,
  protein: 0,
  fat: 0,
};
