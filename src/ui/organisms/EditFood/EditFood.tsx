import { Box, MenuItem, Button, Select } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import React from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { useFood } from '../../../contexts/FoodContext';
import { Food, FoodType, foodTypes } from '../../../types';
import LoadingButton from '../../atoms/LoadingButton/LoadingButton';
import { FoodSchema } from '../../pages/FoodPage/FoodPage';

type EditFoodProps = {
  food: Food;
  handleEditToggle: () => void;
};

const EditFood = ({ food, handleEditToggle }: EditFoodProps): JSX.Element => {
  const { currentUser } = useAuth();
  const { loading, editPersonalFood } = useFood();
  return (
    <div>
      <Formik
        initialValues={{
          name: food.name,
          kcal: food.kcal,
          foodType: food.foodType !== undefined ? (food.foodType as string) : 'NOT_SPECIFIED',
        }}
        validationSchema={FoodSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          editPersonalFood({ ...food, name: values.name, kcal: values.kcal, foodType: values.foodType as FoodType }, currentUser);
          handleEditToggle();
        }}
      >
        {({ submitForm, isSubmitting, errors, values, setFieldValue }) => (
          <Form>
            <Box margin={1}>
              <Field name='name' type='text' label='Name' component={TextField} />
            </Box>
            <Box margin={1}>
              <Field name='kcal' type='number' label='Kcal' component={TextField} />
            </Box>
            <Box margin={1}>
              <Select value={values.foodType} onChange={(e) => setFieldValue('foodType', e.target.value)}>
                {foodTypes.map((foodType) => (
                  <MenuItem key={foodType} value={foodType}>
                    {foodType}
                  </MenuItem>
                ))}
              </Select>
            </Box>
            <Box margin={1}>
              <LoadingButton loading={loading} variant='contained' color='primary' disabled={isSubmitting} onClick={submitForm}>
                Save
              </LoadingButton>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditFood;
