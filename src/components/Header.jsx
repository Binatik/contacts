import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { Burger } from "@cmp/ui/Burger";

//StyledComponents
import { Container } from "@src/store/styleComponents";

const _Header = styled.header`
  margin: 0 0 30px 0;
`

const FlexContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navigation = styled.nav`
  flex: 1 1 auto;
  padding: 0 10px;
`;

const Items = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Item = styled.li`
  margin: 0 1.563em 0 0;
`;

const Link = styled(NavLink)`
  font-size: 1.563rem;
  color: ${props => props.theme.colors.main};
  transition: color 0.2s;

  &.active {
    color: ${props => props.theme.colors.secondary};
  }
`;

const Header = ({ ...props }) => {
  return (
    <>
      <_Header>
        <FlexContainer>
          <Navigation>
            <Items>
              <Item>
                <Link {...props} to="/">
                  Главная
                </Link>
              </Item>
              <Item>
                <Link {...props} to="contacts">
                  Контакты
                </Link>
              </Item>
              <Item>
                <Link {...props} to="auth">
                  Авторизация
                </Link>
              </Item>
            </Items>
          </Navigation>

          <Burger />
        </FlexContainer>
      </_Header>
    </>
  );
};

export { Header };
