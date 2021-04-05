import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Box, Link } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { Redirect } from 'react-router';
import { useAuth } from '../../../contexts/AuthContext';
import LoadingButton from '../../atoms/LoadingButton/LoadingButton';

export type LoginProps = {
  toggleAction: () => void;
};

const Login = ({ toggleAction }: LoginProps): JSX.Element => {
  const { login, loading, isAuthenticated, error } = useAuth();
  if (isAuthenticated) return <Redirect to='/dashboard' />;

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        login(values);
        setSubmitting(false);
        // TODO: FIX -> Button doesn't get disabled
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Box margin={1}>
            <Field name='username' type='text' label='Username' component={TextField} />
          </Box>
          <Box margin={1}>
            <Field name='password' type='password' label='Password' component={TextField} />
          </Box>
          <Box margin={1}>
            <LoadingButton loading={loading} variant='contained' color='primary' disabled={isSubmitting} onClick={submitForm}>
              Login
            </LoadingButton>
            <Link component='button' type='button' variant='body1' onClick={toggleAction}>
              Create an account
            </Link>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
