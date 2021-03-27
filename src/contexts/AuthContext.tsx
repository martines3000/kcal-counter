import React, { useContext, useEffect, useState } from 'react';
import { RotateLoader } from 'react-spinners';
import { API_ADDRESS } from '../config';
import axios from 'axios';

type AuthProviderProps = {
  children?: React.ReactNode;
};

interface IRegister {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

interface ILogin {
  username: string;
  password: string;
}

interface IUser {
  username: string;
  name: string;
  id: string;
  permissions: never[];
  token: string;
}

const initialUserInfo = {
  username: '',
  name: '',
  id: '',
  permissions: [],
  token: '',
};

interface IAuthContext {
  isAuthenticated: boolean;
  currentUser: IUser;
  loading: boolean;
  error: string;
  register: (data: IRegister) => void;
  login: (data: ILogin) => void;
  logout: () => void;
}

const AuthContext = React.createContext<IAuthContext>({
  isAuthenticated: false,
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function register(data: IRegister): void {
    setLoading(true);
    axios({ method: 'post', url: `${API_ADDRESS}/register`, data: data })
      .then((res) => {
        return;
      })
      .catch((err) => setError(err.response.data.message))
      .then(() => setLoading(false));
  }
  function login(data: ILogin): void {
    setLoading(true);
    axios({ method: 'post', url: `${API_ADDRESS}/authenticate`, data: data })
      .then((res) => {
        // TODO: FINISH
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        //setError(err.response.data.message);
      })
      .then(() => {
        setCurrentUser({
          username: 'martines3000',
          name: 'Martin Domajnko',
          id: 'id123id123id123',
          token: 'dflksmgklsdfmgkslodnmgkJWTJWT',
          permissions: [],
        });
        setIsAuthenticated(true);
        setLoading(false);
      });
  }
  function logout(): void {
    setLoading(true);
    axios({ method: 'delete', url: `${API_ADDRESS}/session/destory`, headers: { Authorization: '' } })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => setError(err))
      .then(() => {
        setIsAuthenticated(false);
        setLoading(false);
      });
  }

  useEffect(() => {
    // TODO: Check if JWT still valid and set isAuthenticated to true
  }, []);

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
