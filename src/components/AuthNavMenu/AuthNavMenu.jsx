import { StyledLink, StyledLinkWrapper } from '../layout/Layout.styled';

export const AuthNavMenu = () => {
  return (
    <StyledLinkWrapper>
      <li>
        <StyledLink to="/register">Sign up</StyledLink>
      </li>
      <li>
        <StyledLink to="/login">Login</StyledLink>
      </li>
    </StyledLinkWrapper>
  );
};
