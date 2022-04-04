import React, { Children } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #00000061;
  position: fixed;
  left: 0;
  top: 0;
  opacity: ${props => (props.active ? "1" : "0")};
  pointer-events: ${props => (props.active ? "all" : "none")};
  transition: opacity 0.2s;
`;

const Content = styled.div`
  padding: 20px;
  background-color: #fff;
`;

const Modal = ({ setActive, children, ...props }) => {
  return (
    <>
      <ModalContainer {...props} onClick={() => setActive(false)}>
        <Content onClick={event => event.stopPropagation()}>
          {children}
        </Content>
      </ModalContainer>
    </>
  );
};

export { Modal };
