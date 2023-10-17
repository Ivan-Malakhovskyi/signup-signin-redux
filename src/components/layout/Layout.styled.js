import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: ${({ theme: { colors } }) => colors.black};
    background-color: orangered;
  }
`;

export const StyledLinkWrapper = styled.div`
  margin-left: auto;
  display: flex;
`;

export const BaseContainer = styled.div`
  padding: 0 15px;
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${({ theme: { colors } }) => colors.white};
  box-sizing: border-box;
`;

export const Header = styled.header`
  padding: 5px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.headerColor};
  box-shadow: ${({ theme: { colors } }) => colors.boxShadow};
`;

export const Nav = styled.nav`
  display: flex;
  color: ${({ theme: { colors } }) => colors.navColor};
`;

export const HomeLink = styled.ul`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
`;

export const ErrorMsg = styled.p`
  padding: 10px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33; /* 133.333% */
  letter-spacing: -0.36px;
`;
