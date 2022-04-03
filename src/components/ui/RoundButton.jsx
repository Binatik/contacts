import React from "react";
import styled from "styled-components";

const Сircle = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 50%;
  font-size: 22px;
  width: ${props => props.buttonSize};
  height: ${props => props.buttonSize};
  padding: ${props => props.size};
  background-color: ${props => props.theme.colors.main};
  color: #fff;
  transition: transform 0.5s;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }

  &::before,
  ::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    display: block;
    width: 24px;
    height: 2px;
    color: #fff;
    background: #fff;
    transition: transform 0.4s;
  }

  &::before {
    transform: translate(-50%, 0) rotate(90deg);
  }

  &::after {
    transform: translate(-50%, 0) rotate(0deg);
  }

  &:hover::before, :hover::after {
    transform: translate(-50%, 0) rotate(360deg);
  }
`;

const RoundButton = ({ handleClick, ...props }) => {
  return (
    <>
      <Сircle onClick={handleClick} {...props}></Сircle>
    </>
  );
};

export { RoundButton };
