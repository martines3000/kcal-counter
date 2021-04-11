import React from 'react';
import { Story } from '@storybook/react';

import Login, { LoginProps } from './Login';

export default {
  component: Login,
  title: 'organisms/Login',
};

const Template: Story<LoginProps> = (args) => <Login {...args} />;

export const Default = Template.bind({});
