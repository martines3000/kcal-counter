import React from 'react';
import { Story } from '@storybook/react';

import FoodIcon, { FoodIconProps } from './FoodIcon';

export default {
  component: FoodIcon,
  title: 'atoms/FoodIcon',
};

const Template: Story<FoodIconProps> = (args) => <FoodIcon {...args} />;

export const Default = Template.bind({});

Default.args = {
  foodType: 'FISH',
};
