import React from 'react';
import { createStyles, ListItem, ListItemSecondaryAction, ListItemText, makeStyles, Theme, Typography } from '@material-ui/core';
import { Food } from '../../../types';
import ListItemFoodIcon from '../ListItemFoodIcon/ListItemFoodIcon';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      backgroundColor: theme.palette.background.paper,
    },
    kcal: {
      margin: theme.spacing(4, 0, 2),
    },
  }),
);

export type ListItemFoodProps = {
  food: Food;
};

const ListItemFood = ({ food }: ListItemFoodProps): JSX.Element => {
  const classes = useStyles();

  return (
    <ListItem className={classes.listItem}>
      <ListItemFoodIcon foodType={food.foodType} />
      <ListItemText primary={food.name} secondary={food.foodType} />
      <ListItemSecondaryAction>
        <Typography variant='h6'>{`${food.kcal} kcal`}</Typography>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ListItemFood;
