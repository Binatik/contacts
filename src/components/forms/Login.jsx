import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { InputText } from "./InputText";
import { Submit } from "./Submit";
import { getAccess, fetchUser } from "@src/toolkit/slice/authorization";

//StyledComponents
import { Container } from "@src/store/styleComponents";

const Form = styled.form`
  padding: 10px;
  background-color: transparent;
`;

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  function getAccessAuth(event) {
    event.preventDefault();
    alert("Вы успешно авторизовались и теперь вам доступны контакты.");
    return dispatch(getAccess());
  }
  return (
    <>
      <Container>
        <Form action="post">
          <InputText labelId={"name"} text="Имя" />
          <InputText labelId={"email"} text="Email" />
          <Submit handlerSubmit={getAccessAuth} text="Войти" />
        </Form>
      </Container>
    </>
  );
};

export { Login };
