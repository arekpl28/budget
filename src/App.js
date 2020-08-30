import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";

import { Navigation, Wrapper, LoadingIndicator, Button } from "components";
import {
  fetchBudget,
  fetchBudgetedCategories,
} from "data/actions/budget.actions";
import GlobalStyle from "./index.css";

import theme from "utils/theme";

function App({ budget, fetchBudget, fetchBudgetedCategories }) {
  useEffect(() => {
    fetchBudget(1);
    fetchBudgetedCategories(1);
  }, [fetchBudget, fetchBudgetedCategories]);
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
            <Route path="/" exact>
              home
            </Route>
            <Route path="/budget">budget </Route>
          </Switch>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

const ConnectedApp = connect(
  (state) => {
    return {
      budget: state.budget.budget,
    };
  },
  {
    fetchBudget,
    fetchBudgetedCategories,
  }
)(App);

function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingIndicator></LoadingIndicator>}>
        <ConnectedApp></ConnectedApp>
      </React.Suspense>
    </ThemeProvider>
  );
}

export default RootApp;
