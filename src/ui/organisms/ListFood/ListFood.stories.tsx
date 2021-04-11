import React from 'react';
import { Story } from '@storybook/react';
import ListFood, { ListFoodProps } from './ListFood';
import { foodArray } from '../../storyData';

export default {
  component: ListFood,
  title: 'organisms/ListFood',
};

const Template: Story<ListFoodProps> = (args) => <ListFood {...args} />;

export const Default = Template.bind({});

Default.args = {
  foodArray: foodArray,
};
