import React from 'react';
import { Button, ButtonProps } from '@material-ui/core';
import { PulseLoader } from 'react-spinners';

export type LoadingButtonProps = ButtonProps & {
  loading: boolean;
};

const LoadingButton = ({ loading, ...rest }: LoadingButtonProps): JSX.Element => {
  return <Button {...rest}>{loading ? <PulseLoader size='8' color='white' /> : rest.children}</Button>;
};

export default LoadingButton;
