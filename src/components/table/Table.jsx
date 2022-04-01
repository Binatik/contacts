import React from "react";
import Button from "../ui/Button";
import { User } from "./User";

import styled from "styled-components";

const Flex = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  flex: ${props => props.theme.grid.col2};
  min-height: 100%;
  border: 1px solid #c4c4c4;
`;

const Table = ({ titleText, titleButton, text, description }) => {
  return (
    <>
      <Flex>
        <User titleText={titleText} text={text} description={description} />
        <Button size={"10px 50px"} title={titleButton} />
      </Flex>
    </>
  );
};

export { Table };
