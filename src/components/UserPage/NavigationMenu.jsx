import { authSelectors } from 'redux/auth/auth-selectors';
import { Nav, StyledLink } from 'components/layout/Layout.styled';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const NavigationMenu = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Nav>
      <li>
        <StyledLink to="/">Home</StyledLink>
      </li>

      {isLoggedIn && (
        <li>
          <StyledLink to="/contacts">Contacts</StyledLink>
        </li>
      )}
    </Nav>
  );
};
