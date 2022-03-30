import React from "react";
import styled from "styled-components";

import { Header } from "@cmp/Header";
import { Footer } from "@cmp/Footer";
import { Outlet } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 100%;
`;

const Main = styled.main`
  flex: 1 1;
`;

const Layout = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </Wrapper>
    </>
  );
};

export { Layout };
