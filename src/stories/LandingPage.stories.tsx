import React from 'react';
import { Story } from '@storybook/react';

import LandingPage from '../pages/LandingPage';

export default {
  component: LandingPage,
  title: 'pages/LandingPage',
};

const Template: Story = () => <LandingPage />;

export const Default = Template.bind({});
