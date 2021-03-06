import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { InputText } from "./InputText";
import { Submit } from "./Submit";
import { getAccess, setValueRegisteredUsers } from "@src/toolkit/slice/registeredUsers";

//StyledComponents
import { Container } from "@src/store/styleComponents";

const MainForm = styled.form`
  padding: 10px;
  max-width: 450px;
  background-color: transparent;
`;

const Authorization = () => {
  const dispatch = useDispatch();

  function getValue(...argument) {
    dispatch(setValueRegisteredUsers({ ...argument }));
  }

  function getAccessAuth(argument) {
    argument.preventDefault();
    dispatch(getAccess());
  }

  return (
    <>
      <Container>
        <MainForm action="post">
          <InputText labelId={"name"} text="Имя" handleChange={getValue} />
          <InputText labelId={"email"} text="Email" handleChange={getValue} />
          <Submit handlerSubmit={getAccessAuth} text="Войти" />
        </MainForm>
      </Container>
    </>
  );
};

export { Authorization };
