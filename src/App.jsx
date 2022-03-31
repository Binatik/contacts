import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "@cmp/Layout";
import { Auth } from "@cmp/Auth";
import { Index } from "@pages/Index";
import { Contacts } from "@pages/Contacts";
import { Authorization } from "@pages/Authorization";
import { fetchUser } from "@src/toolkit/slice/authorization";
import { Error404 } from "@pages/Error404";
import "./style.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    //Зависим от dispatch
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="auth" element={<Authorization />} />
          <Route
            path="contacts"
            element={
              <Auth>
                <Contacts />
              </Auth>
            }
          />
          <Route path="404" element={<Error404 />} />
          <Route path="*" element={<Navigate to="404" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
