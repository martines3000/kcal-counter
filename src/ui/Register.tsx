import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, Box, Link } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { useAuth } from '../contexts/AuthContext';
import LoadingButton from './LoadingButton';

export type RegisterProps = {
  toggleAction: () => void;
};

const Register = ({ toggleAction }: RegisterProps): JSX.Element => {
  const { register, loading, error } = useAuth();
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        register({
          firstName: values.firstName,
          lastName: values.lastName,
          username: values.username,
          email: values.email,
          password: values.password,
        });
        setSubmitting(false);
        // TODO: FIX -> Button doesn't get disabled
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Box margin={1}>
            <Field name='firstName' type='text' label='First Name' component={TextField} />
          </Box>
          <Box margin={1}>
            <Field name='lastName' type='text' label='Last Name' component={TextField} />
          </Box>
          <Box margin={1}>
            <Field name='username' type='text' label='Username' component={TextField} />
          </Box>
          <Box margin={1}>
            <Field name='email' type='email' label='Email' component={TextField} />
          </Box>
          <Box margin={1}>
            <Field name='password' type='password' label='Password' component={TextField} />
          </Box>
          <Box margin={1}>
            <Field name='confirmPassword' type='password' label='Confirm Password' component={TextField} />
          </Box>
          <Box margin={1}>
            <LoadingButton loading={loading} variant='contained' color='primary' disabled={isSubmitting} onClick={submitForm}>
              Register
            </LoadingButton>
            <Link component='button' type='button' variant='body1' onClick={toggleAction}>
              I already have an account
            </Link>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
