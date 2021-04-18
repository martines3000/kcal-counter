import React from 'react';
import { Story } from '@storybook/react';

import Food from './FoodPage';

export default {
  component: Food,
  title: 'pages/Food',
};

const Template: Story = () => <Food />;

export const Default = Template.bind({});
