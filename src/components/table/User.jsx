import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-size: ${props => props.theme.fontSize.title};
  color: ${props => props.theme.colors.main};
`;

const Text = styled.p`
  font-size: ${props => props.theme.fontSize.text};
  color: ${props => props.theme.colors.main};
`;

const Description = styled.p`
  font-size: 0.6rem;
  color: ${props => props.theme.colors.main};
`;

const Item = styled.div`
  background-color: transparent;
  padding: 10px;
  flex: 1 1;
`;

const User = ({ titleText, text, description }) => {
  return (
    <>
      <Item>
        <Title>{titleText}</Title>
        <Text>{text}</Text>
        <Description>{description}</Description>
      </Item>
    </>
  );
};

export { User };
