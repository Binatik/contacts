import React from "react";
import styled from "styled-components";

const Button = styled.input`
  cursor: pointer;
  width: 100%;
  padding: 10px;
  transition: color, background-color 0.1s;

  &:hover {
    background-color: ${props => props.theme.colors.animated};
    color: #fff;
  }

  &:active {
    background-color: ${props => props.theme.colors.main};
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
