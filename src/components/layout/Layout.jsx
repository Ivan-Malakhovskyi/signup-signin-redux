import { Suspense } from 'react';
import {
  BaseContainer,
  Header,
  ListMainLink,
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
          <ListMainLink>
            <li>
              <StyledLinkWrapper>
                <StyledLink to="/">Home</StyledLink>
              </StyledLinkWrapper>
            </li>
            <li>
              <StyledLinkWrapper>
                <StyledLink to="/register">Sign up</StyledLink>
              </StyledLinkWrapper>
            </li>
            <li>
              <StyledLinkWrapper>
                <StyledLink to="/login">Login</StyledLink>
              </StyledLinkWrapper>
            </li>
          </ListMainLink>
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
