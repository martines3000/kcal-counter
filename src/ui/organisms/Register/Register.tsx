import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Avatar, CssBaseline, FormControlLabel, Box, Link, Grid, Typography, makeStyles, Checkbox, Container } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { useAuth } from '../../../contexts/AuthContext';
import LoadingButton from '../../atoms/LoadingButton/LoadingButton';
import * as Yup from 'yup';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Copyright from '../../atoms/Copyright/Copyright';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#e6ffe6',
    height: '100vh',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#81c784',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  text: {
    primary: '#487e4c',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#487e4c',
  },
  copyright: {},
}));

export type RegisterProps = {
  toggleAction: () => void;
};

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too short!').max(50, 'Too long!').required(),
  lastName: Yup.string().min(2, 'Too short!').max(50, 'Too long!').required(),
  username: Yup.string().min(5, 'Too short!').max(50, 'Too long!').required(),
  email: Yup.string().email('Invalid email').required(),
  password: Yup.string().min(12, 'Too short!').max(100, 'Too long!').required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required(),
});

const Register = ({ toggleAction }: RegisterProps): JSX.Element => {
  const { register, loading, error } = useAuth();
  const classes = useStyles();

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
      validationSchema={RegisterSchema}
      onSubmit={(values, { setSubmitting }) => {
        register({
          firstName: values.firstName,
          lastName: values.lastName,
          username: values.username,
          email: values.email,
          password: values.password,
          toggleAction: toggleAction,
        });
        setSubmitting(false);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Grid container component='main' className={classes.root}>
          <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component='h1' variant='h5'>
                Sign up
              </Typography>
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      autoComplete='fname'
                      name='firstName'
                      variant='outlined'
                      required
                      fullWidth
                      id='firstName'
                      label='First Name'
                      component={TextField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      variant='outlined'
                      required
                      fullWidth
                      id='lastName'
                      label='Last Name'
                      name='lastName'
                      autoComplete='lname'
                      component={TextField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      variant='outlined'
                      required
                      fullWidth
                      id='email'
                      label='Email Address'
                      name='email'
                      autoComplete='email'
                      component={TextField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      variant='outlined'
                      required
                      fullWidth
                      name='password'
                      label='Password'
                      type='password'
                      id='password'
                      component={TextField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      variant='outlined'
                      required
                      fullWidth
                      name='confirmPassword'
                      label='Repeat Password'
                      type='password'
                      id='password'
                      component={TextField}
                    />
                  </Grid>
                </Grid>
                <LoadingButton loading={loading} type='submit' fullWidth variant='contained' color='inherit' className={classes.submit}>
                  Sign Up
                </LoadingButton>
                <Grid container justify='flex-end' className={classes.text}>
                  <Grid item>
                    <Link onClick={toggleAction} variant='body2' color='textPrimary'>
                      {'Already have an account? Sign in'}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Box mt={5} className={classes.copyright}>
              <Copyright />
            </Box>
          </Container>
        </Grid>
      )}
    </Formik>
  );
};

export default Register;
