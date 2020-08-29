import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "components";
import { Container, List } from "./Navigation.css";

function Navigation({ items }) {
  return (
    <>
      <Wrapper>
        <Container>
          <List>
            {items.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.content}</Link>
              </li>
            ))}
          </List>
        </Container>
      </Wrapper>
    </>
  );
}

export default Navigation;
