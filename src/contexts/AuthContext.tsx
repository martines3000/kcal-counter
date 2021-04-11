/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { API_ADDRESS } from '../config';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { usePublicFood } from './PublicFoodContext';

type AuthProviderProps = {
  children?: React.ReactNode;
};

type IRegister = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};

type ILogin = {
  username: string;
  password: string;
};

type Permission = 'PROFILE_PERMISSION' | 'PERSONAL_FOODS_PERMISSION';

export type IUser = {
  username: string;
  name: string;
  id: string;
  permissions: Permission[];
  token: string;
};

const initialUserInfo = {
  username: '',
  name: '',
  id: '',
  permissions: [],
  token: '',
};

type IAuthContext = {
  isAuthenticated: boolean | null;
  currentUser: IUser;
  loading: boolean;
  error: string;
  register: (data: IRegister) => void;
  login: (data: ILogin) => void;
  logout: () => void;
};

const AuthContext = React.createContext<IAuthContext>({
  isAuthenticated: null,
  currentUser: initialUserInfo,
  loading: false,
  error: '',
  register: () => {
    return;
  },
  login: () => {
    return;
  },
  logout: () => {
    return;
  },
});

export function useAuth(): IAuthContext {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<IUser>(initialUserInfo);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { loadFood } = usePublicFood();

  function register(data: IRegister): void {
    setLoading(true);
    axios({ method: 'post', url: `${API_ADDRESS}/register`, data: data })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => setError(err.response.data.message))
      .then(() => setLoading(false));
  }
  function login(data: ILogin): void {
    setLoading(true);
    axios({ method: 'post', url: `${API_ADDRESS}/authenticate`, data: data })
      .then((res) => {
        const { id, name, permissions, token, username } = res.data;
        console.log(token);
        localStorage.setItem('token', token);
        setCurrentUser({
          id: id,
          name: name,
          permissions: permissions,
          token: token,
          username: username,
        });
        setIsAuthenticated(true);
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message);
        } else {
          setError('Unknown error occurred!');
        }
        setIsAuthenticated(false);
      })
      .then(() => {
        setLoading(false);
      });
  }
  function logout(): void {
    setLoading(true);
    axios({ method: 'delete', url: `${API_ADDRESS}/session/destroy`, headers: { Authorization: `Bearer ${currentUser.token}` } })
      .catch((err) => setError(err))
      .then(() => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setLoading(false);
      });
  }

  function profile(token: string): void {
    setLoading(true);
    axios({ method: 'get', url: `${API_ADDRESS}/profile`, headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        const { firstName, lastName, id, permissions, username } = res.data;
        setCurrentUser({
          id: id,
          name: firstName + ' ' + lastName,
          username: username,
          permissions: permissions,
          token: token,
        });
        setIsAuthenticated(true);
      })
      .catch((err) => {
        setError(err);
        setIsAuthenticated(false);
      })
      .then(() => {
        setLoading(false);
      });
  }

  function checkIfTokenValid(token: string): boolean {
    if (new Date().getTime() / 1000 > parseInt(jwt_decode<{ exp: string; iat: string; id: string }>(token).exp)) return false;
    return true;
  }

  function gotValidToken(): void {
    const token = localStorage.getItem('token');
    if (token && checkIfTokenValid(token)) {
      profile(token);
    } else {
      setIsAuthenticated(false);
    }
  }

  useEffect(() => {
    gotValidToken();
  }, []);

  useEffect(() => {
    if (isAuthenticated) loadFood(currentUser);
  }, [isAuthenticated]);

  const value = {
    isAuthenticated: isAuthenticated,
    currentUser: currentUser,
    loading: loading,
    error: error,
    register: register,
    login: login,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
