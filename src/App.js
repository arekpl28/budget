import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useTranslation } from "react-i18next";
import { Navigation, Wrapper, LoadingIndicator, Button } from "components";
import { HomePage } from "Pages";
import GlobalStyle from "./index.css";

import theme from "utils/theme";

function App() {
  const { i18n } = useTranslation();

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <BrowserRouter>
        <Navigation
          items={[
            { content: "Homepage", to: "/" },
            { content: "Budget", to: "/budget" },
          ]}
          RightElement={
            <div>
              <Button
                variant="regular"
                onClick={() => i18n.changeLanguage("pl")}
              >
                pl
              </Button>
              <Button
                variant="regular"
                onClick={() => i18n.changeLanguage("en")}
              >
                en
              </Button>
            </div>
          }
        ></Navigation>
        <Wrapper>
          <Switch>
            <Route path="/" exact component={HomePage}>
              home
            </Route>
            <Route path="/budget">budget </Route>
          </Switch>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingIndicator></LoadingIndicator>}>
        <App></App>
      </React.Suspense>
    </ThemeProvider>
  );
}

export default RootApp;
