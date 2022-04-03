import React from "react";
import styled from "styled-components";

import { WTextLink } from "@cmp/ui/WTextLink";

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

const Index = () => {
  return (
    <>
      <Container>
        <Title>Контакты новая и интересная модель списка.</Title>
        <Text>Мы предлагаем вам заводить контакты пользователей, редактировать и удалять их.</Text>
        <WTextLink path="auth" warningText="Для начала работы пройдите регистрацию." />
      </Container>
    </>
  );
};

export { Index };
