import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;
  --primary-color: #edf0f3;
  --comment-color: #1da1f2;
  --like-color: #fd3a02;
  --text-color: #333;
  --card-color: #fff;
  --background-hover: #86929e52;
  --border-color: #aaaaaa42;
  --icons-color: #86929e;
  --button-color: #1577f1;
  --button-hover: #1768fb;
  --button-disabled: #656565;
}

html, body, #root {
  height: 100%;
  width: 100%;
  background-color: var(--primary-color);
  color: var(--text-color);
  -webkit-font-smoothing: antialiased !important;
}
`;

export default GlobalStyle;
