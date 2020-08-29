import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Navigation } from "components";
import GlobalStyle from "./index.css";

import theme from "utils/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle></GlobalStyle>
        <BrowserRouter>
          <Navigation
            items={[
              { content: "Homepage", to: "/" },
              { content: "Budget", to: "/budget" },
            ]}
          ></Navigation>
          <Switch>
            <Route path="/" exact>
              homepage
            </Route>
            <Route path="/budget">budget page</Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
