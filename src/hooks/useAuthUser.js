import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectRefresh,
  selectUserName,
} from 'redux/auth/auth-selectors';

export const useAuthUser = () => {
  const isUserLoggedIn = useSelector(selectIsLoggedIn);
  const isUserRefresh = useSelector(selectRefresh);
  const userName = useSelector(selectUserName);

  return { isUserLoggedIn, isUserRefresh, userName };
};
