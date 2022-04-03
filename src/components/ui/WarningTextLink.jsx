import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

const Warning = styled(NavLink)`
  font-size: ${props => props.theme.fontSize.warning};
  color: ${props => props.theme.colors.auxiliary};
  transition: color 0.2s;

  &:hover {
    color: ${props => props.theme.colors.animated};
  }
`;

const WarningTextLink = ({path, warningText}) => {
  return (
    <>
      <Warning to={path}>{warningText}</Warning>
    </>
  );
};

export { WarningTextLink };
