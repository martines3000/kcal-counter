import React from 'react';
import { Story } from '@storybook/react';

import Login, { LoginProps } from '../ui/Login';

export default {
  component: Login,
  title: 'forms/Login',
};

const Template: Story<LoginProps> = (args) => <Login {...args} />;

export const Default = Template.bind({});
