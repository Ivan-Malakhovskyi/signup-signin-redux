import { useAuthUser } from 'hooks/useAuthUser';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ element, redirectTo = '/' }) => {
  const { isUserLoggedIn } = useAuthUser();
  const { isUserRefresh } = useAuthUser();

  const shouldRedirectUser = !isUserRefresh  && ! isUserLoggedIn ;

  return shouldRedirectUser ? <Navigate to={redirectTo} /> : element;
};
