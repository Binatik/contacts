import React from "react";
import styled from "styled-components";

//StyledComponents
import { Container } from "@src/store/styleComponents";

const FlexContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  margin: 0 0 30px 0;
  text-align: center;
  font-size: ${props => props.theme.fontSize.title};
  color: ${props => props.theme.colors.main};
  font-weight: 700;
`;

const Section = ({ title, children }) => {
  return (
    <>
      <section>
        <Title>{title}</Title>
        <FlexContainer>{children}</FlexContainer>
      </section>
    </>
  );
};

export { Section };
