import React from "react";
import styled from "styled-components";

const Label = styled.label`
  position: absolute;
  cursor: text;
  left: 0;
  top: 50%;
  height: auto;
  transform: translate(1px, -50px) scale(0.7); //Трансформация если текст уже написан.
  font-size: 1rem;
  color: ${props => props.theme.colors.iconic};
  transition: transform 0.2s;
`;

const Input = styled.input`
  position: relative;
  display: block;
  margin: 0 0 30px 0;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.main};
  outline: none;
  padding: 11px;
  font-size: 1rem;
  color: ${props => props.theme.colors.main};
  background: transparent;
  transition: border 0.2s;
  &:placeholder-shown + ${Label} {
    transform: translate(11px, -50%) scale(1);
  }
  &::placeholder {
    color: transparent;
    opacity: 0;
  }
  &:focus {
    border-bottom: 1px solid ${props => props.theme.colors.auxiliary};
  }
  &:focus + ${Label} {
    transform: translate(11px, -50px) scale(0.7); //Трансформация если текста еще нет, но есть  focus.
  }
`;

const InputGroup = styled.div`
  position: relative;
  width: 100%;
  margin: 5px 0;
`;
const InputText = React.memo(({ labelId, text, handleChange }) => {
  return (
    <>
      <InputGroup>
        <Input onChange={(event) => handleChange(event.target.value)} autoComplete="off" type="text" placeholder={text} id={labelId}/>
        <Label htmlFor={labelId}>{text}</Label>
      </InputGroup>
    </>
  );
});

export { InputText };
