import React, { useState, useEffect } from 'react';
import { format, parse } from 'date-fns';
import { Button, Input, makeStyles, Typography } from '@material-ui/core';
import ListIntake from '../../organisms/ListIntake/ListIntake';
import { IntakeFood } from '../../../types';
import { useFood } from '../../../contexts/FoodContext';
import ListFoodWithCheckbox from '../../organisms/ListFoodWIthCheckbox/ListFoodWithCheckbox';
import { useApiState } from '../../../hooks/useApiState';
import { API_ADDRESS } from '../../../config';
import axios from 'axios';
import { useAuth } from '../../../contexts/AuthContext';

const useStyles = makeStyles((theme) => ({
  main: {
    margin: theme.spacing(2, 8, 0),
  },
  inner: {
    margin: theme.spacing(2, 0, 2),
  },
  addFood: {
    margin: theme.spacing(0, 2, 0),
  },
}));

type Macros = {
  carbs: number;
  proteins: number;
  fats: number;
};

const Intake = (): JSX.Element => {
  const classes = useStyles();
  function formatDate(dateString: string): string {
    return format(parse(dateString, 'yyyy-MM-dd', new Date()), 'd/M/yyyy');
  }

  const [intake, setIntake] = useState<IntakeFood[]>([]);
  const [totalKcal, setTotalKcal] = useState<number>(0);
  const [macros, setMacros] = useState<Macros>({ carbs: 0, proteins: 0, fats: 0 });
  const [date, setDate] = useState<string>(format(Date.now(), 'yyyy-MM-dd'));
  const { loading, error, setLoading, setError } = useApiState();
  const [addFood, setAddFood] = useState(false);
  const { currentUser } = useAuth();
  const { publicFood, personalFood, getFoodById } = useFood();
  const [checked, setChecked] = useState<string[]>([]);

  function getIntake(): void {
    setIntake([]);
    setLoading(true);
    axios({ method: 'get', url: `${API_ADDRESS}/intake/${formatDate(date)}`, headers: { Authorization: `Bearer ${currentUser.token}` } })
      .then((res) => {
        for (let i = 0; i < res.data.length; ++i) {
          const foundFood = getFoodById(res.data[i].foodId);
          if (foundFood !== null) {
            setIntake((prevState) => [...prevState, { ...foundFood, id: res.data[i].id, foodId: res.data[i].foodId }]);
          }
        }
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message);
        } else {
          setError('Unknown error occurred');
        }
      })
      .then(() => setLoading(false));
  }

  function calcTotal(): void {
    let counter = 0;
    intake.forEach((intakeEle) => {
      counter += intakeEle.kcal;
    });

    setTotalKcal(counter);
  }

  function calcMacros(): void {
    const macroCounter: Macros = { carbs: 0, proteins: 0, fats: 0 };

    intake.forEach((intakeEle) => {
      macroCounter.carbs += intakeEle.carbs;
      macroCounter.proteins += intakeEle.proteins;
      macroCounter.fats += intakeEle.fats;
    });

    setMacros(macroCounter);
  }

  function addChecked(): void {
    for (let i = 0; i < checked.length; i++) {
      const foundFood = getFoodById(checked[i]);
      if (foundFood !== null) {
        axios({
          method: 'post',
          url: `${API_ADDRESS}/intake/${formatDate(date)}/${foundFood.id}`,
          headers: { Authorization: `Bearer ${currentUser.token}` },
        })
          .then((res) => {
            const intakeFood = { ...foundFood, id: res.data.id, foodId: res.data.foodId };
            setIntake((prevState) => [...prevState, intakeFood]);
          })
          .catch((err) => {
            if (err.response) {
              setError(err.response.data.message);
            } else {
              setError('Unknown error occurred');
            }
          })
          .then(() => setLoading(false));
      }
    }
    setAddFood(false);
  }

  useEffect(() => {
    getIntake();
  }, [date]);

  useEffect(() => {
    calcTotal();
    calcMacros();
  }, [intake]);

  return (
    <div className={classes.main}>
      {!addFood && (
        <div>
          <div>
            <Typography variant='h5'>Total calories: {totalKcal}</Typography>
            <Typography variant='h5'>{`Carbs: ${macros.carbs} Protein: ${macros.proteins} Fat: ${macros.fats}`}</Typography>
            <div className={classes.inner}>
              <Input
                type='date'
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
              <Button variant='contained' color='primary' onClick={() => setAddFood(true)} className={classes.addFood}>
                Add food
              </Button>
            </div>
            {intake.length === 0 && <Typography variant='h5'>No intake for this day has been found!</Typography>}
          </div>
          <ListIntake foodArray={intake} />
        </div>
      )}
      {addFood && (
        <div>
          <ListFoodWithCheckbox foodArray={publicFood.concat(personalFood)} checked={checked} setChecked={setChecked} />
          <Button variant='contained' color='primary' onClick={addChecked}>
            Add selected
          </Button>
        </div>
      )}
    </div>
  );
};

export default Intake;
