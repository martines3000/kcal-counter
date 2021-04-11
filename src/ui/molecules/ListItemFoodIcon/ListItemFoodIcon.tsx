import { ListItemIcon, Icon } from '@material-ui/core';
import React from 'react';
import { FoodType } from '../../../types';
import FoodIcon from '../../atoms/FoodIcon/FoodIcon';

export type ListItemFoodIconProps = {
  foodType: FoodType | undefined;
};

const ListItemFoodIcon = ({ foodType }: ListItemFoodIconProps): JSX.Element => {
  return (
    <ListItemIcon>
      <Icon fontSize='large' color='primary'>
        <FoodIcon foodType={foodType} />
      </Icon>
    </ListItemIcon>
  );
};

export default ListItemFoodIcon;
