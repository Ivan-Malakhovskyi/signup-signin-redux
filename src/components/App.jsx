import { GlobalStyle } from 'GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { serviceCurrentUser } from 'redux/auth/auth-operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useAuthUser } from 'hooks/useAuthUser';

const Home = lazy(() => import('./pages/Home'));
const Registration = lazy(() => import('./pages/Registration'));
const Login = lazy(() => import('./pages/Login'));
const Contacts = lazy(() => import('./pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  const { isUserRefresh } = useAuthUser();

  useEffect(() => {
    dispatch(serviceCurrentUser());
  }, [dispatch]);

  return isUserRefresh ? (
    <p>Refreshing...</p>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                element={<Registration />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute element={<Login />} redirectTo="/contacts" />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute element={<Contacts />} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
