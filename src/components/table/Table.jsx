import React from "react";
import styled from "styled-components";
import { Button } from "@cmp/ui/Button";
import { useDispatch } from "react-redux";
import { User } from "./User";
import { fetchRemoveContact } from "@src/toolkit/slice/contacts";

const Item = styled.article`
  padding: 10px;
  display: flex;
  align-items: center;
  flex: ${props => props.theme.grid.col2};
  min-height: 100%;
  border: 1px solid #c4c4c4;
  flex-wrap: wrap;

  @media ${props => props.theme.breakpoints.tablet} {
  display: block;
 }
`;

const Group = styled.div`
 display: flex;
 flex-direction: column;

 @media ${props => props.theme.breakpoints.tablet} {
  width: 100%;
 }
`

const Table = ({ titleButton, ...props }) => {
  const dispatch = useDispatch();

  function removeContact(id) {
    dispatch(fetchRemoveContact(id));
  }
  return (
    <>
      <Item>
        <User {...props} />
        <Group >
          <Button handleClick={removeContact} size={"10px 50px"} title="Удалить" {...props} />
          <Button handleClick={removeContact} size={"10px 50px"} title="редактировать" {...props} />
        </Group>
      </Item>
    </>
  );
};

export { Table };
