import React from 'react';
import {
  Button,
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from '@material-ui/core';
import { Fastfood } from '@material-ui/icons';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useStyles } from '../../../App';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Dashboard = (): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <main>
        <div className={classes.container}>
          <Container maxWidth='sm'>
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
              Our Recipes
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              {'Pull up a chair. Take a Taste. Come join us. Life is so endlessly delicious.'}
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia} image='https://source.unsplash.com/featured/?food,eating' title='Image Title' />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5'>
                      Recipe
                    </Typography>
                    <Typography> Ingredients....</Typography>
                  </CardContent>
                  <CardActions>
                    <Button className={classes.buttonPrvi} size='small' color='primary'>
                      View
                    </Button>
                    <Button className={classes.buttonDrugi} size='small' color='secondary'>
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant='subtitle1' align='center' color='textSecondary'>
          Copyright 2021
        </Typography>
      </footer>
    </>
  );
};

export default Dashboard;
