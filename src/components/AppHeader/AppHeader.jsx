import { NavigationMenu } from 'components/Navigation/NavigationMenu';
import { Header } from '../layout/Layout.styled';
import { useSelector } from 'react-redux';
import { UserPage } from 'components/UserPage/UserPage';
import { AuthNavMenu } from 'components/AuthNavMenu/AuthNavMenu';

import { Nav } from '../layout/Layout.styled';
import { authSelectors } from 'redux/auth/auth-selectors';

export const AppHeader = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Header>
      <Nav>
        <NavigationMenu />
        {isLoggedIn ? <UserPage /> : <AuthNavMenu />}
      </Nav>
    </Header>
  );
};
