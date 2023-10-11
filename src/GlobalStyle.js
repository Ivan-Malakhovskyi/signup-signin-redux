


import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap'); 

body {
    background-color: ${({ theme: { colors } }) => colors.MainBackgroundColor};
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

img {
  display: block;
  max-width: 100%;
  object-fit: cover; 
  height: auto;
  margin: 0 auto;
}

ul,h1, h2, h3, h4, h5, h6, p {
    font-family: inherit;
      padding: 0;
  margin: 0;
  list-style: none;
}

a {
  font-family: inherit;
  text-decoration: none;
  display: inline-block;
}
`;
