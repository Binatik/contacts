import React from "react";
import styled from "styled-components";

const Button = styled.input`
  cursor: pointer;
  width: 100%;
  padding: 10px;

  &:active {
    background-color: #fff;
  }
`;

const Submit = ({ handlerSubmit, text }) => {
  return (
    <>
      <Button onClick={event => handlerSubmit(event)} type="submit" value={text}></Button>
    </>
  );
};

export { Submit };
