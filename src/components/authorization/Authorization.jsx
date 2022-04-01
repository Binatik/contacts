import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { InputText } from "../ui/InputText";
import { Submit } from "./Submit";
import { getAccess, setValueForm } from "@src/toolkit/slice/authorization";

//StyledComponents
import { Container } from "@src/store/styleComponents";

const MainForm = styled.form`
  padding: 10px;
  max-width: 450px;
  background-color: transparent;
`;

const Authorization = () => {
  const dispatch = useDispatch(); 

  function getValue(value, key) {
    dispatch(setValueForm({value, key}));
  }

  function getAccessAuth(event) {
    event.preventDefault();
    dispatch(getAccess());
  }
  return (
    <>
      <Container>
        <MainForm action="post">
          <InputText labelId={"name"} text="Имя" handleChange={getValue}/>
          <InputText labelId={"email"} text="Email" handleChange={getValue} />
          <Submit handlerSubmit={getAccessAuth} text="Войти" />
        </MainForm>
      </Container>
    </>
  );
};

export { Authorization };
