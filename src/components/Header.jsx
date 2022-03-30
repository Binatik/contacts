import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { Burger } from "@cmp/Burger";

//StyledComponents
import { Container } from "@src/store/styleComponents";

const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;

  &.active {
    color: ${props => props.theme.colors.auxiliary};
  }
`;

const Header = ({ ...props }) => {
  return (
    <>
      <header>
        <Container>
          <Link {...props} to="/">
            Главная
          </Link>
          <Link {...props} to="/404">
            Контакты
          </Link>
          <Link {...props} to="auth">
            Авторизация
          </Link>
          <Burger />
        </Container>
      </header>
    </>
  );
};

export { Header };
