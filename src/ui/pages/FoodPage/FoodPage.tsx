import { Box, Button, Select, MenuItem, makeStyles } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import React, { useEffect, useState } from 'react';
import { useFood } from '../../../contexts/FoodContext';
import { Food, foodTypes } from '../../../types';
import LoadingButton from '../../atoms/LoadingButton/LoadingButton';
import ListFood from '../../organisms/ListFood/ListFood';
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';
import { useAuth } from '../../../contexts/AuthContext';
import ListFoodWithCheckbox from '../../organisms/ListFoodWIthCheckbox/ListFoodWithCheckbox';
import EditFood from '../../organisms/EditFood/EditFood';

export const FoodSchema = Yup.object().shape({
  name: Yup.string().required(),
  kcal: Yup.number().positive().required(),
  foodType: Yup.string().optional(),
});

const useStyles = makeStyles((theme) => ({
  main: {
    margin: theme.spacing(2, 8, 0),
  },
}));

const FoodPage = (): JSX.Element => {
  const classes = useStyles();
  const { publicFood, personalFood, createPersonalFood, loading, removePersonalFood, getFoodById } = useFood();
  const [create, setCreate] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editFood, setEditFood] = useState(false);
  const { currentUser } = useAuth();
  const [checked, setChecked] = useState<string[]>([]);
  const [currentFood, setCurrentFood] = useState<Food | null>(null);

  function handleEditToggle(): void {
    if (currentFood !== null) {
      setEditFood((prevState) => !prevState);
    }
  }

  useEffect(() => {
    if (checked.length === 1) {
      setCurrentFood(getFoodById(checked[0]));
    }
  }, [checked]);

  return (
    <div className={classes.main}>
      {!edit && (
        <div>
          <ListFood foodArray={publicFood.concat(personalFood)} />
          <Button variant='contained' color='primary' onClick={() => setEdit(true)}>
            Edit personal food
          </Button>
        </div>
      )}

      {edit && (
        <div>
          {!create && !editFood && (
            <>
              <ListFoodWithCheckbox checked={checked} setChecked={setChecked} foodArray={personalFood} single />
              <Button variant='contained' color='primary' onClick={() => setCreate(true)}>
                Create new food
              </Button>
              <Button variant='contained' color='primary' onClick={handleEditToggle}>
                Edit selected
              </Button>
              <Button
                variant='contained'
                color='primary'
                onClick={() => {
                  if (checked.length === 1) removePersonalFood(checked[0], currentUser);
                }}
              >
                Remove selected
              </Button>
              <Button variant='contained' color='primary' onClick={() => setEdit(false)}>
                Back to food
              </Button>
            </>
          )}
          {!create && checked.length === 1 && editFood && currentFood !== null && (
            <EditFood food={currentFood} handleEditToggle={handleEditToggle} />
          )}
          {create && (
            <div>
              <Formik
                initialValues={{
                  name: '',
                  kcal: 0,
                  foodType: 'NOT_SPECIFIED',
                }}
                validationSchema={FoodSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  createPersonalFood(values, currentUser);
                  resetForm();
                  setSubmitting(false);
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
                        Create food
                      </LoadingButton>
                    </Box>
                    <Box margin={1}>
                      <Button variant='contained' color='primary' onClick={() => setCreate(false)}>
                        Back to food
                      </Button>
                    </Box>
                  </Form>
                )}
              </Formik>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FoodPage;
