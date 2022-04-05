import React from "react";
import styled from "styled-components";

const Label = styled.label`
  position: absolute;
  padding: 0 10px;
  cursor: text;
  left: 0;
  top: 0;
  height: auto;
  transform: translate(11px, -10px) scale(1); //Трансформация если текст уже написан.
  font-size: ${props => props.theme.fontSize.label};
  color: ${props => props.theme.colors.iconic};
  background-color: #fff;
  transition: transform 0.2s;
`;

const Input = styled.input`
  position: relative;
  display: block;
  margin: 0 0 30px 0;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.main};
  outline: none;
  padding: 15px;
  font-size: ${props => props.theme.fontSize.label};
  color: ${props => props.theme.colors.main};
  background: transparent;
  transition: border 0.2s;
  &:placeholder-shown + ${Label} {
    transform: translate(11px, -10px) scale(1);
  }
  &::placeholder {
    color: transparent;
    opacity: 0;
  }
  &:focus {
    border: 1px solid ${props => props.theme.colors.animated};
  }
  &:focus + ${Label} {
    color: ${props => props.theme.colors.animated};
    transform: translate(11px, -10px) scale(1); //Трансформация если текста еще нет, но есть  focus.
  }
`;

const InputGroup = styled.div`
  position: relative;
  width: 100%;
  margin: 5px 0;
`;
const InputTextForm = React.memo(({ labelId, text, handleChange }) => {
  return (
    <>
      <InputGroup>
        <Input onChange={event => handleChange(event.target.value, labelId)} autoComplete="off" type="text" placeholder={text} id={labelId} />
        <Label htmlFor={labelId}>{text}</Label>
      </InputGroup>
    </>
  );
});

export { InputTextForm };
