import { NavigationMenu } from 'components/UserPage/NavigationMenu';
import { Header } from '../layout/Layout.styled';
import { UserPage } from 'components/UserPage/UserPage';
import { AuthNavMenu } from 'components/AuthNavMenu/AuthNavMenu';
import { Nav } from '../layout/Layout.styled';
import { useAuthUser } from 'hooks/useAuthUser';

export const AppHeader = () => {
  const { isUserLoggedIn } = useAuthUser();
  return (
    <Header>
      <Nav>
        <NavigationMenu />
        {isUserLoggedIn ? <UserPage /> : <AuthNavMenu />}
      </Nav>
    </Header>
  );
};
