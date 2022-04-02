import React from "react";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { User } from "./User";
import { fetchRemoveContact } from "@src/toolkit/slice/contacts";

import styled from "styled-components";

const Flex = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  flex: ${props => props.theme.grid.col2};
  min-height: 100%;
  border: 1px solid #c4c4c4;
`;

const Table = ({ titleButton, ...props }) => {
  const dispatch = useDispatch();

  function removeContact(id) {
    dispatch(fetchRemoveContact(id));
  }
  return (
    <>
      <Flex>
        <User {...props} />
        <Button handleClick={removeContact} size={"10px 50px"} title={titleButton} {...props} />
      </Flex>
    </>
  );
};

export { Table };
