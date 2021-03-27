import React from 'react';
import { Story } from '@storybook/react';

import LoadingButton, { LoadingButtonProps } from '../ui/LoadingButton';

export default {
  component: LoadingButton,
  title: 'components/LoadingButton',
};

const Template: Story<LoadingButtonProps> = (args) => <LoadingButton {...args}>Test</LoadingButton>;

export const Default = Template.bind({});

Default.args = {
  loading: false,
  color: 'primary',
  variant: 'contained',
};