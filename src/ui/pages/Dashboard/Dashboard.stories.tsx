import React from 'react';
import { Story } from '@storybook/react';

import Dashboard from './Dashboard';

export default {
  component: Dashboard,
  title: 'pages/Dashboard',
};

const Template: Story = () => <Dashboard />;

export const Default = Template.bind({});
