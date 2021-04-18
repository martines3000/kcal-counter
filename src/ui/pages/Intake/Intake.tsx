import React, { useState, useEffect } from 'react';
import { format, parse } from 'date-fns';
import { Button, Input } from '@material-ui/core';
import ListIntake from '../../organisms/ListIntake/ListIntake';
import { IntakeFood } from '../../../types';
import { useFood } from '../../../contexts/FoodContext';
import ListFoodWithCheckbox from '../../organisms/ListFoodWIthCheckbox/ListFoodWithCheckbox';
import { useApiState } from '../../../hooks/useApiState';
import { API_ADDRESS } from '../../../config';
import axios from 'axios';
import { useAuth } from '../../../contexts/AuthContext';

const Intake = (): JSX.Element => {
  function formatDate(dateString: string): string {
    return format(parse(dateString, 'yyyy-MM-dd', new Date()), 'd/M/yyyy');
  }

  const [intake, setIntake] = useState<IntakeFood[]>([]);
  const [totalKcal, setTotalKcal] = useState<number>(0);
  const [date, setDate] = useState<string>(format(Date.now(), 'yyyy-MM-dd'));
  const { loading, error, setLoading, setError } = useApiState();
  const [addFood, setAddFood] = useState(false);
  const { currentUser } = useAuth();
  const { publicFood, personalFood, getFoodById } = useFood();
  const [checked, setChecked] = useState<string[]>([]);

  function getIntake(): void {
    setLoading(true);
    axios({ method: 'get', url: `${API_ADDRESS}/intake/${formatDate(date)}`, headers: { Authorization: `Bearer ${currentUser.token}` } })
      .then((res) => {
        setIntake(res.data);
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
  }, [intake]);

  return (
    <>
      {!addFood && (
        <div>
          <div>
            <Input
              type='date'
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            <div>Todal calories: {totalKcal}</div>
            {intake.length === 0 && <div>No intake for this day has been found!</div>}
            <Button variant='contained' color='primary' onClick={() => setAddFood(true)}>
              Add food
            </Button>
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
    </>
  );
};

export default Intake;
