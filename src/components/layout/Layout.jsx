import { Suspense } from 'react';
import {
  BaseContainer,
  Header,
  Nav,
  StyledLink,
  StyledLinkWrapper,
} from './Layout.styled';

import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <BaseContainer>
      <Header>
        <Nav>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <StyledLinkWrapper>
            <li>
              <StyledLink to="/register">Sign up</StyledLink>
            </li>
            <li>
              <StyledLink to="/login">Login</StyledLink>
            </li>
          </StyledLinkWrapper>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...👌</div>}>
          <Outlet />
        </Suspense>
      </main>
    </BaseContainer>
  );
};
