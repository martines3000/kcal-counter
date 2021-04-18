import React from 'react';
import { IntakeFood } from '../../../types';
import ListItemFood from '../../molecules/ListItemFood/ListItemFood';
import { Divider, List } from '@material-ui/core';

export type ListIntakeProps = {
  foodArray: IntakeFood[];
};

const ListIntake = ({ foodArray }: ListIntakeProps): JSX.Element => {
  return (
    <List>
      {foodArray.map((food, index) => (
        <div key={food.id}>
          <ListItemFood food={food} />
          {index !== foodArray.length - 1 ? <Divider variant='inset' /> : <></>}
        </div>
      ))}
    </List>
  );
};

export default ListIntake;
