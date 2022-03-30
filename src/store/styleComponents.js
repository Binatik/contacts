import styled from "styled-components";

export const Container = styled.div`
  max-width: 1290px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const BurgerLine = styled.path`
  fill: none;
  transform-origin: 50%;
  transition: transform 400ms;
  stroke: ${props => props.theme.colors.main};
  stroke-width: 2;
`;
