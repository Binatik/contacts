import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { InputText } from "./InputText";
import { Submit } from "./Submit";
import { getAccess, setValueName, setValueEmail } from "@src/toolkit/slice/authorization";
import { getAuthorizationState } from "@src/toolkit/index";

//StyledComponents
import { Container } from "@src/store/styleComponents";

const Form = styled.form`
  padding: 10px;
  background-color: transparent;
`;

const Login = () => {
  const dispatch = useDispatch(); 
  const { users } = useSelector(getAuthorizationState);
  
  function getName(event) {
    dispatch(setValueName(event));
  }

  function getEmail(event) {
    dispatch(setValueEmail(event));
  }

  function getAccessAuth(event) {
    event.preventDefault();
    dispatch(getAccess(users));
  }
  return (
    <>
      <Container>
        <Form action="post">
          <InputText labelId={"name"} text="Имя" handleChange={getName}/>
          <InputText labelId={"email"} text="Email" handleChange={getEmail} />
          <Submit handlerSubmit={getAccessAuth} text="Войти" />
        </Form>
      </Container>
    </>
  );
};

export { Login };
