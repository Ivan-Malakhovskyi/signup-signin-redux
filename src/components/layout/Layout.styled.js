import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: 500;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: ${({ theme: { colors } }) => colors.black};
    background-color: orangered;
  }
`;

export const StyledLinkWrapper = styled.div`
  display: flex;
`;

export const BaseContainer = styled.div`
  height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme: { colors } }) => colors.white};
  box-sizing: border-box;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 5px;
  background-color: #333;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.headerColor};
  box-shadow: ${({ theme: { colors } }) => colors.boxShadow};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
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
