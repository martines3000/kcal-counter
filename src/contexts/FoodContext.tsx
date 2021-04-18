/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { RotateLoader } from 'react-spinners';
import { API_ADDRESS } from '../config';
import axios from 'axios';
import { Food, FoodType } from '../types';
import { useApiState } from '../hooks/useApiState';
import { IUser } from './AuthContext';

type CreatePersonalFood = {
  name: string;
  kcal: number;
  foodType: string;
};

type FoodProviderProps = {
  children?: React.ReactNode;
};

type IPublicFoodContext = {
  publicFood: Food[];
  personalFood: Food[];
  loadPublicFood: (data: IUser) => void;
  loadPersonalFood: (data: IUser) => void;
  createPersonalFood: (data: CreatePersonalFood, userData: IUser) => void;
  removePersonalFood: (data: string, userData: IUser) => void;
  editPersonalFood: (data: Food, userData: IUser) => void;
  getFoodById: (data: string) => Food | null;
  loading: boolean;
};

const PublicFoodContext = React.createContext<IPublicFoodContext>({
  publicFood: [],
  personalFood: [],
  loadPublicFood: () => {
    return;
  },
  loadPersonalFood: () => {
    return;
  },
  createPersonalFood: () => {
    return;
  },
  removePersonalFood: () => {
    return;
  },
  editPersonalFood: () => {
    return;
  },
  getFoodById: () => null,
  loading: false,
});

export function useFood(): IPublicFoodContext {
  return useContext(PublicFoodContext);
}

const FoodProvider = ({ children }: FoodProviderProps): JSX.Element => {
  const [publicFood, setPublicFood] = useState<Food[]>([]);
  const [personalFood, setPersonalFood] = useState<Food[]>([]);
  const { loading, error, setLoading, setError } = useApiState();

  function loadPublicFood(currentUser: IUser): void {
    setLoading(true);
    axios({ method: 'get', url: `${API_ADDRESS}/foods/public`, headers: { Authorization: `Bearer ${currentUser.token}` } })
      .then((res) => {
        setPublicFood(res.data);
        console.log(res.data);
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

  function loadPersonalFood(currentUser: IUser): void {
    setLoading(true);
    axios({ method: 'get', url: `${API_ADDRESS}/foods/personal`, headers: { Authorization: `Bearer ${currentUser.token}` } })
      .then((res) => {
        setPersonalFood(res.data);
        console.log(res.data);
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

  function getFoodById(id: string): Food | null {
    for (let i = 0; i < publicFood.length; i++) {
      if (publicFood[i].id == id) return publicFood[i];
    }

    for (let i = 0; i < personalFood.length; i++) {
      if (personalFood[i].id == id) return personalFood[i];
    }

    return null;
  }

  function createPersonalFood(data: CreatePersonalFood, currentUser: IUser): void {
    setLoading(true);
    axios({ method: 'post', url: `${API_ADDRESS}/foods/personal`, data, headers: { Authorization: `Bearer ${currentUser.token}` } })
      .then((res) => {
        setPersonalFood((prevState) => [...prevState, res.data]);
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

  function removePersonalFood(foodId: string, currentUser: IUser): void {
    setLoading(true);
    axios({
      method: 'delete',
      url: `${API_ADDRESS}/foods/personal/${foodId}`,
      headers: { Authorization: `Bearer ${currentUser.token}` },
    })
      .then((res) => setPersonalFood((prevState) => prevState.filter((item) => item.id != foodId)))
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message);
        } else {
          setError('Unknown error occurred');
        }
      })
      .then(() => setLoading(false));
  }

  function editPersonalFood(data: Food, currentUser: IUser): void {
    console.log(data);
    setLoading(true);
    axios({ method: 'put', url: `${API_ADDRESS}/foods/personal`, data, headers: { Authorization: `Bearer ${currentUser.token}` } })
      .then((res) => {
        setPersonalFood((prevState) => [...prevState.filter((item) => item.id != data.id), data]);
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

  const value = {
    publicFood: publicFood,
    personalFood: personalFood,
    loadPublicFood: loadPublicFood,
    loadPersonalFood: loadPersonalFood,
    getFoodById: getFoodById,
    loading: loading,
    createPersonalFood: createPersonalFood,
    removePersonalFood: removePersonalFood,
    editPersonalFood: editPersonalFood,
  };

  return <PublicFoodContext.Provider value={value}>{children}</PublicFoodContext.Provider>;
};

export default FoodProvider;
