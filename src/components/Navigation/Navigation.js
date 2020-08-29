import React from "react";
import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useTranslation } from "react-i18next";
import { Container, NavigationWrapper, List } from "./Navigation.css";

function Navigation({ items = [], RightElement }) {
  const { t } = useTranslation();
  const navList = items.map((item) => (
    <li key={item.to}>
      <NavLink exact={item.to === "/" ? true : null} to={item.to}>
        {t(item.content)}
      </NavLink>
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
