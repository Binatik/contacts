import React from "react";
import styled from "styled-components";

const MainButton = styled.button`
  cursor: pointer;
  padding: ${props => props.size};
  background-color: ${props => props.theme.colors.auxiliary};
  color: #fff;
  width: 100%;
  transition: 0.1s;

  &:hover {
    background-color: ${props => props.theme.colors.main};
  }
`;

const Button = ({ handleClick, argument, title, ...props }) => {
  return (
    <>
      <MainButton onClick={() => handleClick(argument)} {...props} type="button">
        {title}
      </MainButton>
    </>
  );
};

export { Button };
