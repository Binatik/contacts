import React, { Children } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 230px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  opacity: ${props => (props.active ? "1" : "0")};
  pointer-events: ${props => (props.active ? "all" : "none")};
  transition: opacity 0.2s;
`;

const Content = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
`;

const Modal = ({ setActive, children, ...props }) => {
  return ReactDOM.createPortal(
    <ModalContainer {...props} onClick={() => setActive(false)}>
      <Content onClick={event => event.stopPropagation()}>{children}</Content>
    </ModalContainer>,
    document.getElementById("root")
  );
};

export { Modal };
