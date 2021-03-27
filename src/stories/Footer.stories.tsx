import React from 'react';
import { Story } from '@storybook/react';

import Footer from '../ui/Footer';

export default {
  component: Footer,
  title: 'components/Footer',
};

const Template: Story = () => <Footer />;

export const Default = Template.bind({});
