import React from 'react';
import { Story } from '@storybook/react';

import Navbar from '../ui/Navbar';

export default {
  component: Navbar,
  title: 'components/Navbar',
};

const Template: Story = () => <Navbar />;

export const Default = Template.bind({});
