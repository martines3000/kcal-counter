import React from 'react';
import { Story } from '@storybook/react';

import ListItemFood, { ListItemFoodProps } from './ListItemFood';
import { List } from '@material-ui/core';
import { kinderSurprise } from '../../storyData';

export default {
  component: ListItemFood,
  title: 'molecules/ListItemFood',
};

const Template: Story<ListItemFoodProps> = (args) => (
  <List>
    <ListItemFood {...args} />
  </List>
);

export const Default = Template.bind({});

Default.args = {
  food: kinderSurprise,
};
