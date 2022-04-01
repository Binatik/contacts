import React from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { toggle } from "@src/toolkit/slice/burger";
import { getBurgerState } from "@src/toolkit";

//StyledComponents
import { BurgerLine } from "@src/store/styleComponents";

const LineClose = styled(BurgerLine)`
  stroke-width: 0.393rem;
`;

const Line6 = styled(BurgerLine)`
  transform: ${props => (props.isAciveBurger ? "translateX(-18px) translateY(3px) rotate(-45deg) scale(0.7)" : "none")};
`;
const Line5 = styled(BurgerLine)`
  transform: ${props => (props.isAciveBurger ? "translateX(18px) translateY(3px) rotate(45deg) scale(0.7)" : "none")};
`;
const Line4 = styled(BurgerLine)`
  transform: ${props => (props.isAciveBurger ? "translateY(0px) rotate(-45deg) scale(0.7)" : "none")};
`;
const Line3 = styled(BurgerLine)`
  transform: ${props => (props.isAciveBurger ? "translateY(0px) rotate(45deg) scale(0.7)" : "none")};
`;
const Line2 = styled(BurgerLine)`
  transform: ${props => (props.isAciveBurger ? "translateX(-18px) translateY(-3px) rotate(45deg) scale(0.7)" : "none")};
`;
const Line1 = styled(BurgerLine)`
  transform: ${props => (props.isAciveBurger ? "translateX(18px) translateY(-3px) rotate(-45deg) scale(0.7)" : "none")};
`;

const IconClose = styled.svg`
  transform: ${props => (props.isAciveBurger ? "scale(1)" : "scale(0)")};
  transition: transform 400ms;
  width: 45px;
  height: 45px;
`;

const IconLine = styled.svg`
  cursor: pointer;
  position: absolute;
  display: block;
  border-radius: 50%;
  width: 45px;
  height: 45px;
`;

const _Burger = styled.div`
  display: none;

  @media ${props => props.theme.breakpoints.tablet} {
    box-shadow: ${props => (props.isAciveBurger ? "0 0 0 100vw rgb(28, 134, 255), 0 0 0 100vh rgb(28, 134, 255)" : "none")};
    border-radius: ${props => (props.isAciveBurger ? "50% 50% 50% 50%" : "0")};

    position: fixed;
    right: 0;
    transform: translate(-15%, 0);
    transition: box-shadow 0.2s, border-radius 0.2s;
    cursor: pointer;
    display: block;
    width: 45px;
    height: 45px;
  }
`;

const Burger = () => {
  const { toggle: isAciveBurger } = useSelector(getBurgerState);
  const dispatch = useDispatch();

  return (
    <>
      <_Burger isAciveBurger={isAciveBurger} onClick={() => dispatch(toggle())}>
        <IconLine version="1.1" viewBox="0 0 100 100">
          <Line1 isAciveBurger={isAciveBurger} d="M 50,35 H 30" />
          <Line2 isAciveBurger={isAciveBurger} d="M 50,35 H 70" />
          <Line3 isAciveBurger={isAciveBurger} d="M 50,50 H 30" />
          <Line4 isAciveBurger={isAciveBurger} d="M 50,50 H 70" />
          <Line5 isAciveBurger={isAciveBurger} d="M 50,65 H 30" />
          <Line6 isAciveBurger={isAciveBurger} d="M 50,65 H 70" />
        </IconLine>
        <IconClose isAciveBurger={isAciveBurger} version="1.1" viewBox="0 0 100 100">
          <LineClose d="M 34,32 L 66,68" />
          <LineClose d="M 66,32 L 34,68" />
        </IconClose>
      </_Burger>
    </>
  );
};
export { Burger };
