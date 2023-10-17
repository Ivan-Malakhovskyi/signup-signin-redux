import { Nav, StyledLink } from 'components/layout/Layout.styled';
import { useAuthUser } from 'hooks/useAuthUser';

export const NavigationMenu = () => {
  const { isUserLoggedIn } = useAuthUser();

  return (
    <Nav>
      <li>
        <StyledLink to="/">Home</StyledLink>
      </li>

      {isUserLoggedIn && (
        <li>
          <StyledLink to="/contacts">Contacts</StyledLink>
        </li>
      )}
    </Nav>
  );
};
