import styled from 'styled-components';
import hero from '../images/hero_image.avif';

export const Hero = styled.section`
  margin: 0 auto;

  min-height: 100vh;
  padding-top: 200px;
  padding-bottom: 200px;
  text-align: center;
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Topic = styled.h1`
  color: ${({ theme: { colors } }) => colors.white};
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -1.92px;
  margin: 0 auto;
`;
