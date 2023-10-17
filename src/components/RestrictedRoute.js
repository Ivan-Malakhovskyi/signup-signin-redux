import { useAuthUser } from 'hooks/useAuthUser';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ element, redirectTo = '/' }) => {
  const { isUserLoggedIn } = useAuthUser();
  return { isUserLoggedIn } ? <Navigate to={redirectTo} /> : element;
};
