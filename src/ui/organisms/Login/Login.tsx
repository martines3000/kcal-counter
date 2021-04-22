import React, { useEffect, useRef, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Box, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { Redirect } from 'react-router';
import { useAuth } from '../../../contexts/AuthContext';
import LoadingButton from '../../atoms/LoadingButton/LoadingButton';
import * as Yup from 'yup';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Copyright from '../../atoms/Copyright/Copyright';

export type LoginProps = {
  toggleAction: () => void;
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/featured/?food,green)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#487e4c',
  },
  text: {
    primary: '#487e4c',
  },
  grd: {
    backgroundColor: '#e6ffe6',
    margin: '0px',
  },
  copyright: {},
}));

const LoginSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

const Login = ({ toggleAction }: LoginProps): JSX.Element => {
  const classes = useStyles();
  const { login, loading, isAuthenticated, error } = useAuth();
  const formikRef = useRef<any>();
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (username && formikRef.current) formikRef.current.setFieldValue('username', username);
  }, []);

  if (isAuthenticated) return <Redirect to='/dashboard' />;

  return (
    <Formik
      innerRef={formikRef}
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        login({ loginInfo: values, save: rememberMe });
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => {
        return (
          <Grid container component='main' className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.grd}>
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                  Sign in
                </Typography>
                <Form className={classes.form} noValidate>
                  <Field
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    id='username'
                    label='Username'
                    name='username'
                    autoComplete='username'
                    component={TextField}
                  />
                  <Field
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                    component={TextField}
                  />
                  <FormControlLabel
                    control={<Checkbox color='primary' checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
                    label='Remember me'
                  />
                  <LoadingButton
                    loading={loading}
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='inherit'
                    className={classes.submit}
                    disabled={isSubmitting}
                  >
                    Sign In
                  </LoadingButton>
                  <Grid container className={classes.text}>
                    <Grid item xs>
                      <Link href='#' variant='body2' color='textPrimary'>
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link onClick={toggleAction} variant='body2' color='textPrimary'>
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                  <Box mt={5} className={classes.copyright}>
                    <Copyright />
                  </Box>
                </Form>
              </div>
            </Grid>
          </Grid>
        );
      }}
    </Formik>
  );
};

export default Login;
