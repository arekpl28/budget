import React from "react";
import { PropTypes } from "prop-types";
import { useTranslation } from "react-i18next";
import { Container, NavigationWrapper, List } from "./Navigation.css";
import { Button } from "components";

function Navigation({ items = [], RightElement }) {
  const { t } = useTranslation();
  const navList = items.map((item) => (
    <li key={item.to}>
      <Button
        variant="inline"
        // exact={item.to === "/" ? true : null}
        to={item.to}
      >
        {t(item.content)}
      </Button>
    </li>
  ));
  return (
    <>
      <Container>
        <NavigationWrapper>
          <List>{navList}</List>
          {RightElement}
        </NavigationWrapper>
      </Container>
    </>
  );
}

Navigation.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Navigation;
