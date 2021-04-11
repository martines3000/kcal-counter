import React from 'react';
import { Story } from '@storybook/react';

import Register, { RegisterProps } from './Register';

export default {
  component: Register,
  title: 'organisms/Register',
};

const Template: Story<RegisterProps> = (args) => <Register {...args} />;

export const Default = Template.bind({});
