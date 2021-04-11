import React from 'react';
import { Story } from '@storybook/react';

import TopAppBar, { TopAppBarProps } from './TopAppBar';

export default {
  component: TopAppBar,
  title: 'organisms/TopAppBar',
};

const Template: Story<TopAppBarProps> = (args) => <TopAppBar {...args} />;

export const Default = Template.bind({});
