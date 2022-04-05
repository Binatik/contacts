import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  margin: 0 0 5px 0;
  font-size: ${props => props.theme.fontSize.title};
  color: ${props => props.theme.colors.main};
`;

const Text = styled.p`
  margin: 0 0 10px 0;
  font-size: ${props => props.theme.fontSize.text};
  color: ${props => props.theme.colors.main};
`;

const Description = styled.p`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.auxiliary};
`;

const Contact = styled.div`
  background-color: transparent;
  padding: 10px;
  flex: 1 1;
`;

const User = ({ title, text, description }) => {
  return (
    <>
      <Contact>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Description>{description}</Description>
      </Contact>
    </>
  );
};

export { User };
