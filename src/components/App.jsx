import { GlobalStyle } from 'GlobalStyle';

// import { Filter } from './phoneBook/contactFilter/conatactFilter';
// import { MainTitle, Title } from './phoneBook/contactList/contactList.styled';
// import { FormUser } from './phoneBook/contactForm/contactForm';
// import { ContactList } from './phoneBook/contactList/contactList';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectError, selectIsLoading } from 'redux/selectors';
// import { useEffect } from 'react';
// import { serviceContacts } from 'components/auth/auth-operations';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './layout/Layout';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Registration = lazy(() => import('./pages/Registration'));
const Login = lazy(() => import('./pages/Login'));
const Contacts = lazy(() => import('./pages/Contacts'));

export const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(serviceContacts());
  // }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Registration />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
