import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth/auth-selectors';

export const PrivateRoute = ({ element, redirectTo = '/' }) => {
  const isUserLoggIn = useSelector(authSelectors.getIsLoggedIn);
  const isUserRefresh = useSelector(authSelectors.getRefresh);

  const shouldRedirectUser = !isUserRefresh && !isUserLoggIn;

  return shouldRedirectUser ? <Navigate to={redirectTo} /> : element;
};
