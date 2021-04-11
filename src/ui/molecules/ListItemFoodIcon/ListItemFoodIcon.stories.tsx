import React from 'react';
import { Story } from '@storybook/react';

import ListItemFoodIcon, { ListItemFoodIconProps } from './ListItemFoodIcon';

export default {
  component: ListItemFoodIcon,
  title: 'molecules/ListItemFoodIcon',
};

const Template: Story<ListItemFoodIconProps> = (args) => <ListItemFoodIcon {...args} />;

export const Default = Template.bind({});

Default.args = {
  foodType: 'FISH',
};
