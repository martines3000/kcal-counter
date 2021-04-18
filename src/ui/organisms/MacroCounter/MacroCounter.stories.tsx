import React, { useState } from 'react';
import { Story } from '@storybook/react';

import MacroCounter from './MacroCounter';

export default {
  component: MacroCounter,
  title: 'organisms/MacroCounter',
};

const Template: Story = () => {
  return <MacroCounter />;
};

export const Default = Template.bind({});