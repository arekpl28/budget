import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 10px;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  li + li {
    margin-left: ${({ theme }) => theme.spacing.xs}px;
  }
}
`;
