import React from "react";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { User } from "./User";
import { removeContact } from "@src/toolkit/slice/contact";

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

  function remove(id) {
    dispatch(removeContact(id));
  }
  return (
    <>
      <Flex>
        <User {...props} />
        <Button handleClick={remove} size={"10px 50px"} title={titleButton} {...props} />
      </Flex>
    </>
  );
};

export { Table };
