import React from "react";
import styled from "styled-components";
import { InputText } from "./InputText";
import { Submit } from "./Submit";

//StyledComponents
import { Container } from "@src/store/styleComponents";

const Form = styled.form`
  padding: 10px;
  background-color: transparent;
`;

const Login = () => {
  return (
    <>
      <Container>
        <Form action="post">
          <InputText labelId={"name"} text="Имя" />
          <InputText labelId={"email"} text="Email" />
          <Submit text='Войти' />
        </Form>
      </Container>
    </>
  );
};

export { Login };
