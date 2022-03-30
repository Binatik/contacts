import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "@cmp/Layout";
import { Index } from "@pages/Index";
import { Authorization } from "@pages/Authorization";
import { Error404 } from "@pages/Error404";
import "./style.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="auth" element={<Authorization />} />
          <Route path="404" element={<Error404 />} />
          <Route path="*" element={<Navigate to="404" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
