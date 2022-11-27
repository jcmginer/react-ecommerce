import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { AuthReducer } from '../store/AuthReducer';
import { types } from '../types/types';

export const AuthProvider = ({ children }) => {

  const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
      isLogged: !!user,
      user,
    };
  };

  const [authState, dispatch] = useReducer(AuthReducer, {}, init);

  const login = (userData = {}) => {

    localStorage.setItem('user', JSON.stringify(userData));

    dispatch({
      type: types.login,
      payload: userData,
    });
  };

  const logout = () => {
    localStorage.removeItem('user');

    dispatch({
      type: types.logout,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};