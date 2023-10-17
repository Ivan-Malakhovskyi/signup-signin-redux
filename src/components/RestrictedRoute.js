import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth/auth-selectors';

export const RestrictedRoute = ({ element, redirectTo = '/' }) => {
  const isUserLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isUserLoggedIn ? <Navigate to={redirectTo} /> : element;
};
