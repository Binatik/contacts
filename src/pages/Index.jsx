import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

//StyledComponents
import { Container } from "@src/store/styleComponents";

const Title = styled.h2`
  margin: 15px 0;
  color: ${props => props.theme.colors.main};
  font-size: ${props => props.theme.fontSize.title};
`;

const Text = styled.p`
  color: ${props => props.theme.colors.main};
  font-size: ${props => props.theme.fontSize.text};
`;

const Info = styled(NavLink)`
  color: ${props => props.theme.colors.auxiliary};
  transition: color 0.2s;

  &:hover {
    color: #9966cc;
  }
`;

const Index = () => {
  return (
    <>
      <Container>
        <Title>Контакты новая и интересная модель списка.</Title>
        <Text>Мы предлагаем вам заводить контакты пользователей, редактировать и удалять их.</Text>
        <Info to="auth">Для начала работы пройдите регистрацию.</Info>
      </Container>
    </>
  );
};

export { Index };
