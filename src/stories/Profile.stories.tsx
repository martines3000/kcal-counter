import React from 'react';
import { Story } from '@storybook/react';

import Profile from '../pages/Profile';

export default {
  component: Profile,
  title: 'pages/Profile',
};

const Template: Story = () => <Profile />;

export const Default = Template.bind({});
