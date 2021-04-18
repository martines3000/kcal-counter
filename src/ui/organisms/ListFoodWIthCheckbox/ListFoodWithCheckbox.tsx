import React from 'react';
import { Food } from '../../../types';
import ListItemFood from '../../molecules/ListItemFood/ListItemFood';
import { Divider, List, Checkbox, makeStyles } from '@material-ui/core';

export type ListFoodWithCheckboxProps = {
  foodArray: Food[];
  checked: string[];
  setChecked: React.Dispatch<React.SetStateAction<string[]>>;
  single?: boolean;
};

const useStyles = makeStyles((theme) => ({
  listItemWrapper: {
    display: 'flex',
    width: '100%',
  },
  listItem: {
    flex: 1,
  },
}));

const ListFoodWithCheckbox = ({ foodArray, checked, setChecked, single }: ListFoodWithCheckboxProps): JSX.Element => {
  const classes = useStyles();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>, c: boolean, id: string): void {
    if (single) {
      if (c) {
        setChecked([id]);
      } else {
        setChecked([]);
      }
    } else {
      if (c) {
        setChecked((prevState) => [...prevState, id]);
      } else {
        setChecked((prevState) => prevState.filter((item) => item !== id));
      }
    }
  }
  return (
    <List>
      {foodArray.map((food, index) => (
        <div key={food.id}>
          <div className={classes.listItemWrapper}>
            <Checkbox checked={checked.includes(food.id)} onChange={(e, c) => handleChange(e, c, food.id)} />
            <div className={classes.listItem}>
              <ListItemFood food={food} />
            </div>
          </div>
          {index !== foodArray.length - 1 ? <Divider variant='inset' /> : <></>}
        </div>
      ))}
    </List>
  );
};

export default ListFoodWithCheckbox;
