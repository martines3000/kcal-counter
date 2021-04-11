/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { RotateLoader } from 'react-spinners';
import { API_ADDRESS } from '../config';
import axios from 'axios';
import { Food } from '../types';
import { useApiState } from '../hooks/useApiState';
import { IUser } from './AuthContext';

type PublicFoodProviderProps = {
  children?: React.ReactNode;
};

type IPublicFoodContext = {
  publicFood: Food[];
  loadFood: (data: IUser) => void;
};

const PublicFoodContext = React.createContext<IPublicFoodContext>({
  publicFood: [],
  loadFood: () => {
    return;
  },
});

export function usePublicFood(): IPublicFoodContext {
  return useContext(PublicFoodContext);
}

const PublicFoodProvider = ({ children }: PublicFoodProviderProps): JSX.Element => {
  const [publicFood, setPublicFood] = useState<Food[]>([]);
  const { loading, error, setLoading, setError } = useApiState();

  function loadFood(currentUser: IUser): void {
    setLoading(true);
    axios({ method: 'get', url: `${API_ADDRESS}/foods/public`, headers: { Authorization: `Bearer ${currentUser.token}` } })
      .then((res) => {
        setPublicFood(res.data);
        console.log(res.data);
      })
      .catch((err) => setError(err.message))
      .then(() => setLoading(false));
  }

  const value = {
    publicFood: publicFood,
    loadFood: loadFood,
  };

  return <PublicFoodContext.Provider value={value}>{children}</PublicFoodContext.Provider>;
};

export default PublicFoodProvider;
