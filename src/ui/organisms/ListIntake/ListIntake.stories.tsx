import React from 'react';
import { Story } from '@storybook/react';
import ListIntake, { ListIntakeProps } from './ListIntake';
import { foodArray } from '../../storyData';

export default {
  component: ListIntake,
  title: 'organisms/ListIntake',
};

const Template: Story<ListIntakeProps> = (args) => <ListIntake {...args} />;

export const Default = Template.bind({});

// Default.args = {
//   foodArray: foodArray,
// };
